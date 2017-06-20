using AsgSearch.DAL;
using AsgSearch.web.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AsgSearch.web.Controllers
{
    public class PastSearchesController : ApiController
    {
        IQueryService _svc;

        public PastSearchesController(IQueryService svc)
        {
            _svc = svc;
        }

        [HttpGet]
        public IEnumerable<Query> Get()
        {
            List<Query> result = null;
            try {
                result =_svc.GetQueries();
            }
            catch(Exception ex)
            {
                result = null;
            }

            return result;
        }

        public Query Get(int id)
        {
            return null;
        }

        public HttpResponseMessage Post([FromBody]Query value)
        {
            try {
                var result = _svc.SaveQuery(value.QueryText, value.Time, value.Questions.ToList());
                if (result == null)
                {
                    return this.Request.CreateResponse(HttpStatusCode.NotModified);
                }
                else
                {
                    return this.Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            catch(Exception ex)
            {
                return this.Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }

        public void Put(int id, [FromBody]Query value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}
