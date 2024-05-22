using LibraryProject.Data;
using LibraryProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public CategoriesController(ApplicationDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<List<Category>> GetAll() 
        { 
            return await _context.Set<Category>().Include(c=>c.Books).ToListAsync();
        }
    }
}
