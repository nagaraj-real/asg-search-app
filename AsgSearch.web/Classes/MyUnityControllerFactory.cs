using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.Practices.Unity;

namespace AsgSearch.web.Classes
{
    public class MyUnityControllerFactory : DefaultControllerFactory
    {
        readonly IUnityContainer _container;

        public MyUnityControllerFactory(IUnityContainer container)
        {
            this._container = container;
        }


        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {
            if (controllerType == null)
            {
                throw new HttpException(
                    404,
                    string.Format(
                        "The controller for path '{0}' could not be found.",
                        requestContext.HttpContext.Request.Path));
            }
            return (IController)_container.Resolve(controllerType);
        }

    }
}