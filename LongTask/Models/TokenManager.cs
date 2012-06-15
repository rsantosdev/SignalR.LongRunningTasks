using System.Collections.Generic;
using System.Threading;

namespace LongTask.Models
{
    internal static class TokenManager
    {
        static readonly IDictionary<string, CancellationTokenSource> TokemManager = new Dictionary<string, CancellationTokenSource>();

        internal static void Add(string procId, CancellationTokenSource token)
        {
            TokemManager.Add(procId, token);
        }

        internal static CancellationTokenSource Get(string procId)
        {
            return TokemManager[procId];
        }
    }
}