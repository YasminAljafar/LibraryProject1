﻿using LibraryProject.Models;

namespace LibraryProject.ViewModels
{
    public class CreateBook
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }
        public int CategoryId { get; set; }
    }
}
