using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AsgSearch.DAL
{
    [Table("Answers")]
    public class Answers
    {
        public int ID { get; set; }
        public string AnswerBody { get; set; }
        public string AnswerOwnerName { get; set; }
        public string AnswerOwnerImage { get; set; }

        public int QuestionId { get; set; }

        [ForeignKey("QuestionId")]
        public Questions Question { get; set; }



    }

  
}
