#pragma once

#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>

#include <string>

namespace poke {

    class PokeWindow{

        public:
            PokeWindow(int w, int h, std::string name);
            ~PokeWindow();

            PokeWindow(const PokeWindow &) = delete;
            PokeWindow &operator=(const PokeWindow &) = delete;
			
			bool shouldClose() { return glfwWindowShouldClose(window); }			

            void createWindowSurface(VKInstance instance, VKSurfaceKHR *surface);

        private:

            void initWindow();

            const int width;
            const int height;

            std::string windowName;
            GLFWwindow *window;
        
    };

};
