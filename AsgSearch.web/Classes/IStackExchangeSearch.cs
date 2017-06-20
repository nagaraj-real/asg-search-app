using System.Collections.Generic;

namespace AsgSearch.web.Classes
{
    public interface IStackExchangeSearch
    {
        IEnumerable<string> Search(string strText);
    }
}