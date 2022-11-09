#pragma once

#include "poke_window.hpp"
#include "poke_pipeline.hpp"

namespace poke {

    class App {

        public:
            static constexpr int WIDTH = 800;
            static constexpr int HEIGHT = 600;

        void run();

        private:
            PokeWindow pokeWindow{WIDTH, HEIGHT, "Hello Vulkan"};
            PokePipeline pokePipeline{"shaders/simp_shader.vert.spv", "shaders/simp_shader.frag.spv"};
    };
}
