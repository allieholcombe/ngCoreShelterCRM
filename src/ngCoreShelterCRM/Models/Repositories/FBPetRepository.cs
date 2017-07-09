using Firebase.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Models.Repositories
{
    public class FBPetRepository : IPetRepository
    {
        DatabaseContext db = new DatabaseContext();

        public List<Pet> Pets()
        {

        }
    }
}
