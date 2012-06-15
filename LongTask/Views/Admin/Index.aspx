<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="row-fluid">
        <div class="span12">
            <h2>
                Server running tasks</h2>
            <table id="tblTasksAdmin" class="table table-striped">
                <thead>
                    <tr>
                        <th>
                            User/Task
                        </th>
                        <th>
                            Percentage Done
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <script type="text/javascript" src="<%: Url.Content("~/Scripts/hubAdmin.js") %>"></script>
</asp:Content>
