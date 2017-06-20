import {Answer} from './answer.model';

export class Question{
    QuestionTitle:string;
    QuestionDate:Date;
    QuestionOwnerImage:string;
    QuestionOwnerName:string;
    Tags:Array<string>;
    AnswerCount:string;
    QuestionLink:string
    Answers:Array<Answer>;
}
