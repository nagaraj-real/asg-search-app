using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AsgSearch.DAL
{
    [Table("Questions")]
    public class Questions
    {
        public int ID { get; set; }
        public string QuestionTitle { get; set; }
        public DateTime QuestionDate { get; set; }
        public string QuestionOwnerName { get; set; }
        public string QuestionOwnerImage { get; set; }
        public List<string> Tags { get; set; }
        public int AnswerCount { get; set; }
        public string QuestionLink { get; set; }
        public virtual ICollection<Answers> Answers { get; set; }

        public int QueryId { get; set; }

        [ForeignKey("QueryId")]
        public Query Query { get; set; }

    }
 

}
