using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Models.Interfaces
{
    interface IPet
    {
        string Key
        {
            get;
            set;
        }

        string Name
        {
            get;
            set;
        }

        string Sex
        {
            get;
            set;
        }
    }
}
