//using System.Collections.Generic;
//using System.Threading.Tasks;
//using ngCoreShelterCRM.Services.Pets;

//namespace ngCoreShelterCRM.Models.Repositories
//{
//    public class FBUserRepository
//    {
//        protected static UserDataAccess dataAccess = new UserDataAccess();

//        protected static UserTransform transform = new UserTransform();

//        /// <summary>
//        /// Gets all pets from database
//        /// </summary>
//        /// <returns>Task List of Pet Objects</returns>
//        public async Task<List<User>> Users()
//        {
//            var users = await dataAccess.RetrievePets();

//            var petList = await transform.TransformPets(pets);

//            return petList;
//        }
//    }
//}
