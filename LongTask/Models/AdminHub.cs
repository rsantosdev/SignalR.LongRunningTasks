using SignalR.Hubs;

namespace LongTask.Models
{
    public class AdminHub : Hub
    {
        public void CancelProc(string procId)
        {
            TokenManager.Get(procId).Cancel();
        }
    }
}