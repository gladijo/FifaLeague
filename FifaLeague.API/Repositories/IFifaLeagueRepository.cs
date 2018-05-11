using System;
using System.Collections.Generic;

namespace FifaLeague.API.Repositories {
    public interface IRepository<T> where T : class {

        IEnumerable<T> GetList();
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
    }
}