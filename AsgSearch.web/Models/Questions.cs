using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace AsgSearch.Web.Models
{
    [DataContract]
    public class Questions
    {
        [DataMember]
        public string QuestionTitle { get; set;}

        [DataMember]
        public string Time { get; set; }

        [DataMember]
        public string NoOfResponses { get; set; }

        [DataMember]
        public string AuthorName { get; set; }

        [DataMember]
        public string Tags { get; set; }

        [DataMember]
        public string AvatarImage { get; set; }

        [DataMember]
        public List<AcceptedAnswer> Answer { get; set; }

        [DataMember]
        public string Link { get; set; }


    }
    
}
