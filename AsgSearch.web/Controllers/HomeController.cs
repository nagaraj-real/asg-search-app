using System.Web.Mvc;

namespace AsgSearch.web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var result = new FilePathResult("~/asgsearchapp/dist/index.html", "text/html");
            return result;
        }
        public ActionResult Step1()
        {
            ViewBag.Title = "Step 1";

            return View();
        }
        public ActionResult Step2()
        {
            ViewBag.Title = "Step 2";

            return View();
        }
        public ActionResult Step3()
        {
            ViewBag.Title = "Step 3";

            return View();
        }
    }
}
