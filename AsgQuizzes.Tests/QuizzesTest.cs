using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AsgQuizzes.Tests
{
    /// <summary>
    /// HINT: This class MUST NOT be modified. You don't have to write anything here.
    /// </summary>
    [TestClass]
    public class QuizzesTest
    {
        [TestMethod]
        public void ReverseStringTest()
        {
            var qs = new Quizzes();
            Assert.AreEqual("hola",qs.ReverseString("aloh"));
        }

        [TestMethod]
        public void PostfixCalc1()
        {
            var qs = new Quizzes();
            Assert.AreEqual(100, qs.PostFixCalc("5 5 + 10 *"));
        }

        [TestMethod]
        public void PostfixCalc2()
        {
            var qs = new Quizzes();
            Assert.AreEqual(106, qs.PostFixCalc("5 5 + ja10ja * 2r4 + +"));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void PostfixCalcError()
        {
            var qs = new Quizzes();
            Assert.AreEqual(106, qs.PostFixCalc("5 5 + ja10ja * 2r4 + + +"));
        }

        [TestMethod]
        public void GetSatisfyingNumbersTest()
        {
            var qs = new Quizzes();
            CollectionAssert
                .AreEqual(new[] {3, 6, 9, 12, 15, 18}, qs.GetSatisfyingNumbers(20, n => n%3 == 0));
        }

        [TestMethod]
        public void GetOddNumbersTest()
        {
            var qs = new Quizzes();
            CollectionAssert.AreEqual(new[] { 1, 3, 5, 7, 9 }, qs.GetOddNumbers(10));
        }

        [TestMethod]
        public void GetSecondBiggerNumberTest()
        {
            var qs = new Quizzes();
            Assert.AreEqual(8, qs.GetSecondGreatestNumber(new[] {1, 3, 8, 10, 5, 7}));
        }

        [TestMethod]
        public void FormatHexTest()
        {
            var qs = new Quizzes();
            Assert.AreEqual("FFCC00", qs.FormatHex(255, 204, 0), true);
        }

        [TestMethod]
        public void OrderByAvgScoresDescendingTest()
        {
            var exams =
                new[]
                    {
                        new Exam("anna", 9.5m), new Exam("anna", 7.0m), new Exam("anna", 8.0m),
                        new Exam("marcel", 7.0m), new Exam("marcel", 5.0m), new Exam("marcel", 8.0m),
                        new Exam("lluis", 9.0m), new Exam("lluis", 9.0m), new Exam("lluis", 9.0m),
                        new Exam("ari", 3.0m), new Exam("ari", 4.0m), new Exam("ari", 5.0m),
                    };
            var qs = new Quizzes();
            CollectionAssert.AreEqual(new[] {"lluis", "anna", "marcel", "ari"}
                                      , qs.OrderByAvgScoresDescending(exams));
        }

        [TestMethod]
        public void GetExamFromStringTest()
        {
            var examStr = @"{""Student"" : ""lluis"", ""Score"" : ""9.0""}";
            var qs = new Quizzes();
            var ret = qs.GetExamFromString(examStr);
            Assert.AreEqual("lluis", ret.Student);
            Assert.AreEqual(9.0m, ret.Score);
        }


        [TestMethod]
        public void GenerateBoard1()
        {
            var strInput = " o x    x";
            var qs = new Quizzes();
            Assert.AreEqual(@"
   | O |   
-----------
 X |   |   
-----------
   |   | X 
"
, qs.GenerateBoard(strInput));
        }

        [TestMethod]
        public void GenerateBoard2()
        {
            var strInput = "ooooooooo";
            var qs = new Quizzes();
            Assert.AreEqual(@"
 O | O | O 
-----------
 O | O | O 
-----------
 O | O | O 
"
, qs.GenerateBoard(strInput));
        }

        [TestMethod]
        public void GenerateBoard3()
        {
            var strInput = "ooxoxoxoo";
            var qs = new Quizzes();
            Assert.AreEqual(@"
 O | O | X 
-----------
 O | X | O 
-----------
 X | O | O 
"
, qs.GenerateBoard(strInput));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void GenerateBoardError()
        {
            var strInput = "olakeaseo";
            var qs = new Quizzes();
            var ret = qs.GenerateBoard(strInput);
        }

        [TestMethod]
        public void ParseBoard()
        {
            var strInput =
                @"
   | O | X 
-----------
   | X | O 
-----------
   | O | O 
";
            var qs = new Quizzes();
            Assert.AreEqual(" ox xo oo", qs.ParseBoard(strInput));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void ParseBoardError()
        {
            var strInput =
                @"
   | O |
-----------
   |
-----------
   | O | O 
";
            var qs = new Quizzes();
            var ret = qs.ParseBoard(strInput);
        }

    }
}
