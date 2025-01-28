using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Context;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PoliticsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PoliticsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Politics
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Politic>>> GetPolitics()
        {
            return await _context.Politics.ToListAsync();
        }

        // GET: api/Politics/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Politic>> GetPolitic(int id)
        {
            var politic = await _context.Politics.FindAsync(id);

            if (politic == null)
            {
                return NotFound();
            }

            return politic;
        }

        // PUT: api/Politics/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPolitic(int id, Politic politic)
        {
            if (id != politic.Id)
            {
                return BadRequest();
            }

            _context.Entry(politic).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PoliticExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Politics
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Politic>> PostPolitic(Politic politic)
        {
            _context.Politics.Add(politic);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPolitic", new { id = politic.Id }, politic);
        }

        // DELETE: api/Politics/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePolitic(int id)
        {
            var politic = await _context.Politics.FindAsync(id);
            if (politic == null)
            {
                return NotFound();
            }

            _context.Politics.Remove(politic);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PoliticExists(int id)
        {
            return _context.Politics.Any(e => e.Id == id);
        }
    }
}
