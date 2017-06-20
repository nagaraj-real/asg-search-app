namespace AsgSearch.DAL
{
    public interface IDALContext : IUnitOfWork
    {
        IQueryRepository Queries { get; }
    }
}