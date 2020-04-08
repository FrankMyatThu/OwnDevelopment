using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
	public class DCandidate
	{
		[Key]
		public int id { get; set; }

		[Column(TypeName = "nvarchar(100)")]
		public string fullName { get; set; }

		[Column(TypeName = "nvarchar")]
		public string mobile { get; set; }

		[Column(TypeName = "nvarchar")]
		public string email { get; set; }
				
		public int age { get; set; }

		[Column(TypeName = "nvarchar")]
		public int bloodGroup { get; set; }

		[Column(TypeName = "nvarchar")]
		public string address { get; set; }
	}
}
