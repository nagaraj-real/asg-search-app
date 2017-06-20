import { Component, OnInit } from '@angular/core';
import { StackoverflowsearchService } from '../stackoverflowsearch.service';
import { Queries, Question, Answer } from "../models";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [StackoverflowsearchService]
})
export class Page1Component implements OnInit {
  questions: Array<any>;
  answers: Array<any>;
  error: boolean;
  Queries: Queries;

  constructor(private stackoverflowsearchService: StackoverflowsearchService) {

  }

  ngOnInit() {
    this.Queries = new Queries();
  };

  onSearch = (querytext): void => {
    this.error = false;
    this.Queries = new Queries();
    this.stackoverflowsearchService.fetchQuestions(querytext).subscribe(
      (response) => {
        console.log(response);
        if (response.json().items && response.json().items.length > 0) {
          this.questions = response.json().items;
          if (this.questions.length > 40) {
            this.questions = this.questions.slice(0, 40);
          }
          this.questions.map((res, index: number) => {
            res.answers = [];
            this.stackoverflowsearchService.fetchAnswerForId(res.question_id).subscribe(answers => {
              res.answers = answers.json().items;
              if (index === this.questions.length - 1) {
                console.log(this.questions);
                this.mapQueries(this.questions, this.Queries, querytext);
                console.log(this.Queries);
                this.stackoverflowsearchService.postRecentSearches(this.Queries).subscribe(response => {
                  console.log(response);
                })
              }
            });
          });
        } else if (response.status === 200) {
          this.Queries.Questions = [];
        } else {
          this.error = true;
        }
      },
      (error) => {
        this.error = true;
      }
    );
  }

  mapQueries = (questions, queries: Queries, querytext: string): void => {
    let Questions: Array<Question> = [];
    questions.forEach(question => {
      let Answers: Array<Answer> = [];
      question.answers.forEach(answer => {
        let _answer: Answer = new Answer();
        _answer.AnswerBody = answer.body;
        _answer.AnswerOwnerImage = answer.owner.profile_image;
        _answer.AnswerOwnerName = answer.owner.display_name;
        Answers.push(_answer);
      })
      let _question: Question = new Question();
      _question.AnswerCount = question.answer_count;
      _question.QuestionDate = new Date(question.creation_date * 1000);
      _question.QuestionLink = question.link;
      _question.QuestionOwnerImage = question.owner.profile_image;
      _question.QuestionOwnerName = question.owner.display_name;
      _question.Tags = question.tags;
      _question.Answers = Answers;
      _question.QuestionTitle = question.title;
      Questions.push(_question);
    });
    queries.Questions = Questions;
    queries.Time = new Date();
    queries.QueryText = querytext;
  }

}
