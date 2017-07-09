using Firebase.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Models
{
    public class DatabaseContext
    {
        public FirebaseClient client { get; set; } = new FirebaseClient("https://usingwithcsharp.firebaseio.com/");
    }
}
