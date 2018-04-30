using System;
using Xunit;
using FifaLeague.API.Controllers;
using Moq;

namespace FifaLeague.API.Tests
{
    public class PlayerControllerTests
    {
        private readonly PlayerController _controller;

        [Fact]
        public void Test1()
        {
            // Arrange
            var mockContext = new Mock<FifaLeague.API.Models.FifaLeagueContext>();
            var controller = new PlayerController(mockContext.Object);
        
            // Act
            var result = controller.Get();
            
            // Assert
            //Assert.Equals(2, result)
        }
    }
}
