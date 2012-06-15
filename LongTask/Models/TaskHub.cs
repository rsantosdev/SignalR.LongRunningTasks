using System;
using System.Threading;
using System.Threading.Tasks;
using SignalR;
using SignalR.Hubs;

namespace LongTask.Models
{
    public class TaskHub : Hub
    {
        public void DoLongProc(string procId, string taskName)
        {
            /*Server proc started*/
            Caller.id = Guid.NewGuid().ToString();
            var adminContext = GlobalHost.ConnectionManager.GetHubContext<AdminHub>();
            Caller.procStart(procId, Caller.id);
            adminContext.Clients.createAdminProc(procId, taskName, Context.User.Identity.Name);
            
            var tokenSource = new CancellationTokenSource();
            var token = tokenSource.Token;
            TokenManager.Add(procId, tokenSource);
            
            Task.Factory.StartNew(() =>
                                      {

                                          for (var i = 1; i <= 100; i++)
                                          {
                                              if (token.IsCancellationRequested)
                                              {
                                                  Caller.cancelDone(procId);
                                                  adminContext.Clients.cancelDone(procId);
                                                  token.ThrowIfCancellationRequested();
                                              }

                                              /*Update Interface about progress*/
                                              Caller.progress(procId, i);
                                              adminContext.Clients.progress(procId, i);
                                              
                                              //Thread.Sleep(1000 * new Random().Next(60));
                                              Thread.Sleep(1000);
                                          }

                                          /*Server proc completed*/
                                          Caller.procComplete(procId);
                                          adminContext.Clients.procComplete(procId);
                                      }, token);
        }

        public void CancelProc(string procId)
        {
            TokenManager.Get(procId).Cancel();
        }
    }
}