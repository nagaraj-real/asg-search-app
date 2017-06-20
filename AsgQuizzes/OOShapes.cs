using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AsgQuizzes
{
    public class OOShapes
    {
        private List<IShape> shapes = null;
        public OOShapes()
        {
            if (shapes == null)
            {
                shapes = new List<IShape>();
            }

        }

        public IEnumerable<IShape> AllShapes
        {
            get
            {
                return shapes;
            }
        }

        public void AddTriangle(double height, double width)
        {
            var shape = new Triangle(height, width);
            shapes.Add(shape);
        }

        public void AddRectangle(double height, double width)
        {
            var shape = new Rectangle(height, width);
            shapes.Add(shape);
        }

        public string PrintAll()
        {
            StringBuilder result = new StringBuilder();
            AllShapes.ToList().ForEach(shape =>
            {
                if (shape is Rectangle)
                {
                    result.Append("||");
                    result.Append(shape.Area);
                }
                else if (shape is Triangle)
                {
                    result.Append("/\\");
                    result.Append(shape.Area);
                }
            });

            return result.ToString();
        }
    }

    /// <summary>
    /// HINT: You are expected to write classes that implement this interface
    /// </summary>
    public interface IShape
    {
        string WhatIAm { get; }
        double Area { get; }
    }

    public class Rectangle : IShape
    {
        private double _area;

        public Rectangle(double height, double width)
        {
            _area = height * width;
        }

        public double Area
        {
            get
            {
                return _area;
            }
        }

        public string WhatIAm
        {
            get
            {
                return this.ToString();
            }
        }
    }

    public class Triangle : IShape
    {
        private double _area;

        public Triangle(double height, double width)
        {
            _area = 0.5 * height * width;
        }

        public double Area
        {
            get
            {
                return _area;
            }
        }

        public string WhatIAm
        {
            get
            {
                return this.ToString();
            }
        }
    }
}