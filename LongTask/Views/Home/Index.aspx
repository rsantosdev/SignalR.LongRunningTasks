<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="row-fluid">
        <div class="span12">
            <h2>
                <%: ViewData["Message"] %></h2>
            <select id="createTask">
                <option value="0">Select your task</option>
                <option value="1">Change the world</option>
                <option value="2">Scientific Calculation</option>
                <option value="3">Create a good developer</option>
            </select>
            <button id="btnRun" class="btn btn-primary">
                Run Task</button>
            <table id="tblTasks" class="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Name
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
    <script type="text/javascript" src="<%: Url.Content("~/Scripts/hub.js") %>"></script>
</asp:Content>
