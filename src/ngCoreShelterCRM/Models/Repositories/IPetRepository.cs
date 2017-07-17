using ngCoreShelterCRM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Models.Repositories
{
    public interface IPetRepository
    {
        Task<List<Pet>> Pets();
    }
}
