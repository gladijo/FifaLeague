using System;
using Xunit;
using FifaLeague.API.Controllers;
using Moq;
using Microsoft.EntityFrameworkCore;
using FifaLeague.API.Models;

namespace FifaLeague.API.Tests
{
    public class PlayerControllerTests
    {
        DbContextOptions<FifaLeagueContext> options;

        public PlayerControllerTests() {
            var builder = new DbContextOptionsBuilder<FifaLeagueContext>();
            builder.UseInMemoryDatabase("FifaLeagueDB");
            options = builder.Options;
        }
        [Fact]
        public void Test1()
        {
            // Arrange
            var mockContext = new Mock<FifaLeague.API.Models.FifaLeagueContext>(options);
            var controller = new PlayerController(mockContext.Object);
        
            // Act
            var result = controller.Get();
            
            // Assert
            //Assert.Equals(2, result)
        }
    }
}
