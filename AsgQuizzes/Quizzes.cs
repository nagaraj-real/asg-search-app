using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AsgQuizzes
{
    /// <summary>
    /// HINT: Implement this methods to make all tests in QuizzesTest.cs pass
    /// </summary>
    public class Quizzes
    {
        public string ReverseString(string str)
        {
            return new string(str.ToCharArray().Reverse().ToArray());
        }

        public int[] GetSatisfyingNumbers(int limit, Func<int, bool> filter)
        {
            var result = new List<int>(limit);
            int i = 1;
            while (i <= limit)
            {
                if (filter(i)) result.Add(i);
                i++;
            }
            return result.ToArray();
        }

        public int[] GetOddNumbers(int n)
        {
            // HINT: This method must be implemented with a call this.GetSatisfyingNumbers
            return this.GetSatisfyingNumbers(n, s => s % 2 != 0);
        }

        public int GetSecondGreatestNumber(int[] arr)
        {
            return arr.OrderByDescending(x => x).Distinct().Skip(1).First();
        }

        public string FormatHex(byte r, byte g, byte b)
        {
            return r.ToString("X2") + g.ToString("X2") + b.ToString("X2");
        }

        public string[] OrderByAvgScoresDescending(IEnumerable<Exam> exams)
        {
            var studentaverage = from exam in exams
                                 group exam by exam.Student into studgroup
                                 select new
                                 {
                                     student = studgroup.Key,
                                     AverageMarks = studgroup.Average(grp => grp.Score)
                                 };

            var result = from student in studentaverage
                         orderby student.AverageMarks descending
                         select student.student;

            return result.ToArray();
        }

        public Exam GetExamFromString(string examStr)
        {
            throw new NotImplementedException();
        }

        public string GenerateBoard(string strInput)
        {
            bool valid = strInput.All(c => new char[] { 'o', 'x', ' ' }.Contains(c));

            if (!valid)
            {
                throw new ArgumentException("Invalid arguments");
            }
            else
            {

                string output = @"
 {0} | {1} | {2} 
-----------
 {3} | {4} | {5} 
-----------
 {6} | {7} | {8} 
";
                strInput = strInput.Replace('o', 'O');
                strInput = strInput.Replace('x', 'X');

                string result = String.Format(output, strInput.Cast<Object>().ToArray());
                return result;
            }

        }

        public string ParseBoard(string strInput)
        {
            string comparestring = @"
 {0} | {1} | {2} 
-----------
 {3} | {4} | {5} 
-----------
 {6} | {7} | {8} 
";
            string comparestringskel = @"||-----------||-----------||";

            string strInputskel = strInput.Replace("O", string.Empty).Replace("X", string.Empty).Replace(" ",string.Empty).Replace("\n",string.Empty).Trim();

            if (!comparestringskel.Equals(strInputskel))
            {
                throw new ArgumentException("Invalid arguments");
            }
            else
            {

                string output = "";
                int i = 0;
                while (i < 9)
                {
                    comparestring = comparestring.Replace("{", string.Empty);
                    comparestring = comparestring.Replace("}", string.Empty);

                    output += strInput[comparestring.IndexOf(i.ToString())];
                    output = output.Replace("O", "o");
                    output = output.Replace("X", "x");
                    i++;
                }
                bool valid = output.All(c => new char[] { 'o', 'x', ' ' }.Contains(c));
                if (valid)
                {
                    return output;
                }
                else
                {
                    throw new ArgumentException("Invalid arguments");
                }
            }

        }

        public int PostFixCalc(string s)
        {
            throw new NotImplementedException();
        }
    }

    public class Exam
    {
        public string Student { get; set; }
        public decimal Score { get; set; }

        public Exam(string student, decimal score)
        {
            this.Student = student;
            this.Score = score;
        }
    }

}
