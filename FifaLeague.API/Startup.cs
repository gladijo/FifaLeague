using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using FifaLeague.API.Models;

namespace FifaLeague.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        { 
            services.AddDbContext<FifaLeagueContext>(opt => opt.UseInMemoryDatabase("FifaLeague"));
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(builder =>
                    builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
            }
            app.UseDefaultFiles();
            app.UseStaticFiles();
            
            app.UseMvc(routes => { 
                routes.MapRoute(name:"default", template: "{controller=Player}/{action=Get}");
            });
        }
    }
}
