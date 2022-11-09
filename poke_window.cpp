#include "poke_window.hpp"

#include <stdexcept>

namespace poke {

    PokeWindow::PokeWindow(int w, int h, std::string name) : width{w}, height{w}, windowName{name} {
        initWindow();
    }

    PokeWindow::~PokeWindow() {
        glfwDestroyWindow(window);
        glfwTerminate();
    }

    void PokeWindow::initWindow() {
        glfwInit();
        glfwWindowHint(GLFW_CLIENT_API, GLFW_NO_API);
        glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);

        window = glfwCreateWindow(width, height, windowName.c_str(), nullptr, nullptr);

        //make fullscreen on F11
        //change "nullptr" to "monitor" for fixed fullscreen mode
    }

    void PokeWindow::createWindowSurface(VkInstance instance, VkSurfaceKHR *surface) {
        if (glfwCreateWindowSurface(instance, window, nullptr, surface) != VK_SUCCESS) {
            throw std::runtime_error("failed to create window surface");
        }
    }


}