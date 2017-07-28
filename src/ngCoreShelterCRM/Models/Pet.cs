using ngCoreShelterCRM.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Models
{
    public class Pet : IPet
    {
        public string Key { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public string Image { get; set; }

    }
}
