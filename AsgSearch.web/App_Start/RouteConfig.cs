using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AsgSearch.web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
             name: "Default2",
             url: "Page1",
             defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
           );

            routes.MapRoute(
            name: "Default3",
            url: "Page2",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
          );

            routes.MapRoute(
            name: "Default4",
            url: "Page3",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
          );



            routes.MapRoute(
               name: "Default",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
           );
        }
    }
}
