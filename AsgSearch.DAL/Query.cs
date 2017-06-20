using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AsgSearch.DAL
{
    [Table("queries")]
    public class Query
    {
        [Key]
        public int ID { get; set; }

        public virtual string QueryText { get; set; }

        public virtual DateTime Time { get; set; }

        // HINT: You'll have to add some fields here... up to you!
        public virtual ICollection<Questions> Questions { get; set; }

    }

    
    

}
