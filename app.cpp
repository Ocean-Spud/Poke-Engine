#include "app.hpp"

namespace poke {
	void App::run() {
	
	while (!pokeWindow.shouldClose()){
		glfwPollEvents();
	  }	
   }
}
