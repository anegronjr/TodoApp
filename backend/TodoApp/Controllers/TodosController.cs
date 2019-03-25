using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private static List<string> all = new List<string>()
        {
                "Do this",
                "Do that",
                "Don't do this or that"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return all;
        }

        [HttpPost]
        public ActionResult<bool> Post([FromBody] string todo)
        {
            all.Add(todo);
            return true;
        }
    }
}