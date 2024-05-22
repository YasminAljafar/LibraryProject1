using LibraryProject.Data;
using LibraryProject.Models;
using LibraryProject.ViewModels;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LibraryProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public BookController(ApplicationDBContext context)
        {
            _context = context;
        }

        //public JsonResult Category()
        //{
        //    var category=_context.Categories.ToList();
        //    return new JsonResult(category);
        //}
        //public JsonResult Book(int id) 
        //{
        //    var book = _context.Books.Where(b=>b.CreatoryId==id).ToList();
        //    return new JsonResult(book);
        //}

        

        // GET: api/<BookController>
        [HttpGet("{categoryId}")]
        public async Task<IActionResult> GetBooksByCategorId(int categoryId)
        {
             var books=  await _context.Set<Book>().Where(b=>b.CreatoryId==categoryId).ToListAsync();
            return Ok(books);
        }


        [HttpPost]
        public async Task<ActionResult<Book>> AddAsync(CreateBook creatBook)
        {
            var category=await _context.Set<Category>().FindAsync(creatBook.CategoryId);
            var book = new Book()
            {
                Title = creatBook.Title,
                Author=creatBook.Author,
                CreatoryId=creatBook.CategoryId
            };

             _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return Ok(book);

        }

    }
}
