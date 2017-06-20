using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AsgSearch.DAL;

namespace AsgSearch.web.Classes
{
    public class QueryService : IQueryService, IDisposable
    {
        private IDALContext context;

        public QueryService(IDALContext dal)
        {
            context = dal;
        }

        public List<Query> GetQueries()
        {
            int count;
            return context.Queries.Filter(null, out count, 0, 5).OrderByDescending(p => p.Time).ToList();
        }

        // HINT: For step 2 you'll need to add a new parameter so you can set a value for the
        // QueryResults collection in Query
        public Query SaveQuery(string queryText, DateTime time,List<Questions> questions)
        {
            var q =
                new Query()
                    {
                        QueryText = queryText,
                        Time = time,
                        Questions= questions
                    };

            context.Queries.Create(q);
            context.SaveChanges();
            return q;
        }

        public void Dispose()
        {
            if (context != null)
                context.Dispose();
        }
    }
}