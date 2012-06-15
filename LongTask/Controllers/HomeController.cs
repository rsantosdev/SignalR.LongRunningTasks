using System.Web.Mvc;

namespace LongTask.Controllers
{
    [HandleError]
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewData["Message"] = "Welcome, Manage your tasks!";

            return View();
        }
    }
}
