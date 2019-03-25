using System;
using System.Linq;
using TodoApp.Controllers;
using Xunit;

namespace TodoApp.Tests
{
    public class TodoAppTests
    {
        [Fact]
        public void GET_Returns_List_Of_Todos()
        {
            var underTest = new TodosController();

            var result = underTest.Get();

            Assert.Equal(3, result.Value.Count());
        }

        [Fact]
        public void Post_Creates_New_Todo()
        {
            var underTest = new TodosController();

            var result = underTest.Post("Hello World");

            Assert.True(result.Value);
        }

        [Fact]
        public void Post_Increases_Todos_Count()
        {
            var underTest = new TodosController();
            underTest.Post("Foo");

            var result = underTest.Get();

            Assert.Equal(4, result.Value.Count());
        }
    }
}
