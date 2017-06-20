using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AsgQuizzes.Tests
{
    /// <summary>
    /// HINT: In order to make this test pass you should use some OO techniques, specially polymorphism
    /// HINT: This file MUST NOT be modified
    /// </summary>
    [TestClass]
    public class OOShapesTest
    {
        [TestMethod]
        public void FarmTest1()
        {
            var f = new OOShapes();
            f.AddRectangle(2, 2);
            f.AddRectangle(3, 4);
            f.AddTriangle(1, 2);
            Assert.AreEqual("||4||12/\\1", f.PrintAll());
        }
        [TestMethod]
        public void FarmTest2()
        {
            var f = new OOShapes();
            f.AddRectangle(2,2);
            f.AddRectangle(3,4);
            f.AddTriangle(1, 2);
            Assert.AreEqual(1, f.AllShapes.Last().Area);
        }
    }
}
