using System;
using System.Collections.Generic;
using AsgSearch.DAL;

namespace AsgSearch.web.Classes
{
    public interface IQueryService
    {
        // HINT: For step 2 you'll need to add a new parameter so you can set a value for the
        // QueryResults collection in Query
        Query SaveQuery(string queryText, DateTime time,List<Questions> questions);
        List<Query> GetQueries();
    }
}
