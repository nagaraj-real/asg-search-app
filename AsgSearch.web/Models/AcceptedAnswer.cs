using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace AsgSearch.Web.Models
{
    [DataContract]
    public class AcceptedAnswer
    {
        [DataMember]
        public string Text { get; set;}

        [DataMember]
        public string Author { get; set; }

        [DataMember]
        public string Avatar { get; set; }


    }
    
}
