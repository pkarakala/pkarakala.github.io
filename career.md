# Career Planning — Hardware-Software Intersection

**Pranav Reddy** · ECE · UC Santa Barbara

---

## Goal

Identify the internship experience domains that build the strongest transferable skills for future roles at next-generation compute companies operating at the hardware-software boundary: Lightmatter, Etched, Taalas, and Cerebras.

---

## Target Companies — What They Build & What They Need

### Lightmatter — Photonic Computing & Interconnects

Lightmatter builds photonic processors and interconnects that use light instead of electrons for AI compute. Their products span photonic chips, electro-optic systems, and datacenter-scale optical interconnects.

Key engineering roles they hire for:
- Photonics Design Engineers (silicon photonic devices, couplers, rings, switches)
- Hardware/Software Simulation Engineers (co-simulation across digital, analog, photonic domains)
- Hardware Systems Engineers (compute accelerators with photonic technology)
- Electro-Optic Systems Engineers (high-speed photonic link modeling and validation)
- Embedded Software Engineers (control plane architecture for photonic transceivers)

Skill overlap with Pranav's background:
- ECE 136A/B/C (Optics, Photonic Imaging, Quantum Photonics) — direct photonics foundation
- Xanadu X8 photonic quantum processor experience — hardware characterization, GBS, Wigner functions
- HPC simulation infrastructure (40+ cores) — relevant to hardware/software co-simulation
- Python/C++ proficiency — matches their simulation and embedded software stacks

Skill gaps to fill:
- Silicon photonics design and layout (Lightmatter uses custom photonic ICs)
- Analog/mixed-signal design experience
- Hardware description languages beyond Verilog basics (SystemVerilog, UVM)
- Datacenter-scale systems thinking (power, thermal, networking)

### Etched — Transformer-Specific ASICs

Etched builds Sohu, an ASIC hard-coded exclusively for transformer inference. Their approach trades generality for orders-of-magnitude performance gains on a single architecture.

Key engineering roles:
- ASIC Architects (compute architecture for transformer workloads)
- Firmware Engineers (low-level chip control and bring-up)
- Inference Software Engineers (model mapping to dataflow architecture, collectives)
- Hardware Applications Engineers (customer-facing deployment and optimization)
- Emulation Software Engineers (pre-silicon validation)

Skill overlap:
- ECE 152A (Digital Design) — RTL and logic design fundamentals
- Performance optimization mindset (40+ core parallelization, latency-aware design)
- ML/AI understanding (GRU decoders, PyTorch) — knows the workloads these chips serve
- Python/C++ — matches firmware and software tool stacks

Skill gaps:
- ASIC design flow (synthesis, place-and-route, timing closure)
- Dataflow architecture concepts (systolic arrays, spatial computing)
- Low-level firmware and embedded systems (bare-metal C, RTOS)
- Inference optimization (quantization, kernel development, memory hierarchy)

### Taalas — Model-to-Silicon Compilation

Taalas transforms AI models directly into custom silicon — hardening model parameters and weights into extremely fast, low-cost chips. Their approach compiles models into hardware.

Key engineering roles:
- ML Engineers (quantization, model fine-tuning, CUDA kernels)
- Software Engineers — Automation (Python/C++ test infrastructure, lab equipment automation)
- Silicon design engineers (custom chip implementation)

Skill overlap:
- ML pipeline experience (CQEC: training, evaluation, adaptive learning)
- Python proficiency and scientific computing (NumPy, PyTorch, SciPy)
- Hardware-software co-design thinking (Quantum Codesign Lab — the name literally matches)
- Test automation and infrastructure (244 unit tests, reproducible benchmarking)

Skill gaps:
- CUDA kernel development
- Model quantization and compression techniques
- Compiler design concepts (model → hardware mapping)
- Manufacturing test and silicon validation

### Cerebras — Wafer-Scale Computing

Cerebras builds the world's largest AI chip — the Wafer Scale Engine (WSE), 56x larger than GPUs. Their architecture eliminates the memory wall by putting everything on one wafer.

Key engineering roles:
- CoDesign & NextGen Engineers (programming WSE, kernel development, performance modeling)
- Silicon Bring-Up Engineers (H/W-S/W optimization, V-F characterization, power/thermal)
- ML Software Tool Engineers (build tools, debug ML applications on WSE)
- RTL Design Engineers (next-gen WSE design)
- Distributed Software Engineers (cluster automation, bare-metal configuration)

Skill overlap:
- HPC and parallel computing (40+ core infrastructure — scales conceptually to WSE)
- Hardware-software co-design (Quantum Codesign Lab)
- Performance profiling and optimization (trajectory-level parallelism benchmarking)
- Python/C++ and scientific computing stack
- ECE 152A (Digital Design) — RTL fundamentals

Skill gaps:
- Wafer-scale architecture concepts
- Kernel development for custom hardware
- Performance modeling at chip scale
- Distributed systems and cluster management

---

## Transferable Skill Matrix

| Skill Domain | Your Current Level | Lightmatter | Etched | Taalas | Cerebras |
|-------------|-------------------|-------------|--------|--------|----------|
| Photonics & Optics | Strong (ECE 136A/B/C, Xanadu X8) | Critical | — | — | — |
| Digital Design / RTL | Foundation (ECE 152A, Verilog) | Needed | Critical | Needed | Critical |
| HPC / Parallel Computing | Strong (40+ cores, profiling) | Needed | Needed | Needed | Critical |
| ML / PyTorch | Strong (GRU, adaptive learning, RAG) | Useful | Needed | Critical | Critical |
| Hardware-Software Co-Design | Strong (Quantum Codesign Lab) | Critical | Critical | Critical | Critical |
| Signal Processing | Strong (ECE 130A/B, CQEC pipeline) | Needed | Useful | Useful | Useful |
| Embedded / Firmware | Gap | Needed | Critical | Useful | Needed |
| ASIC / Chip Design Flow | Gap | Useful | Critical | Critical | Critical |
| CUDA / GPU Programming | Gap | — | Useful | Critical | Useful |
| Test Infrastructure | Strong (244 tests, CI mindset) | Needed | Needed | Critical | Needed |

---

## Recommended Internship Experience Domains

Based on the skill matrix, these are the internship domains that maximize transferable value across all four target companies:

### Tier 1 — Highest Transfer Value

1. Hardware-Software Co-Design / Computer Architecture
   - Why: Every target company needs engineers who think across the HW-SW boundary
   - Builds: Architecture thinking, performance modeling, RTL-to-software integration
   - Transfers to: All four companies (Lightmatter systems, Etched ASIC, Taalas compilation, Cerebras WSE)

2. Custom Silicon / ASIC Development Tools
   - Why: Three of four companies build custom chips; understanding the design flow is essential
   - Builds: Synthesis, simulation, verification, design automation
   - Transfers to: Etched (ASIC), Taalas (model-to-silicon), Cerebras (WSE), Lightmatter (photonic IC)

### Tier 2 — Strong Transfer Value

3. ML Infrastructure / Inference Optimization
   - Why: All four companies optimize for ML workloads; understanding the software stack matters
   - Builds: Model compilation, quantization, kernel optimization, performance profiling
   - Transfers to: Taalas (critical), Cerebras (critical), Etched (needed), Lightmatter (useful)

4. High-Performance Computing / Distributed Systems
   - Why: Builds on your strongest existing skill; scales to datacenter-level thinking
   - Builds: Cluster management, distributed workloads, performance at scale
   - Transfers to: Cerebras (critical), all others (needed)

### Tier 3 — Targeted Transfer Value

5. Photonics / Electro-Optic Systems
   - Why: Directly relevant to Lightmatter; leverages your strongest coursework
   - Builds: Silicon photonics, optical link design, mixed-signal systems
   - Transfers to: Lightmatter (critical), others (limited)

6. Embedded Systems / Firmware
   - Why: Fills your biggest skill gap; needed at Etched and Lightmatter
   - Builds: Bare-metal programming, RTOS, hardware bring-up
   - Transfers to: Etched (critical), Lightmatter (needed), Cerebras (needed)

---

## Skill Gap Closure Plan

| Gap | How to Close | Timeline |
|-----|-------------|----------|
| ASIC design flow | Take ECE elective in VLSI or digital IC design; use open-source tools (OpenLane, Yosys) | 1 quarter |
| CUDA / GPU programming | Self-study with NVIDIA CUDA toolkit; port CQEC GRU training to GPU | 2-4 weeks |
| Embedded / firmware | Arduino or RISC-V projects; bare-metal C on STM32 | 1 quarter |
| Model quantization | Implement INT8/INT4 quantization on a small model; study PyTorch quantization API | 2-3 weeks |
| Dataflow architecture | Read Cerebras and Etched architecture papers; study systolic arrays | 1-2 weeks |

---

## Summary

Your strongest positioning is at the hardware-software co-design intersection — which is exactly where all four target companies operate. The Quantum Codesign Lab experience, HPC infrastructure work, and ML decoder pipeline give you a rare combination of hardware awareness and software engineering depth.

The ideal internship builds on this foundation by adding chip-level design exposure (ASIC tools, RTL verification, or silicon bring-up) and inference optimization experience (model compilation, kernel development). These two additions would make you competitive for entry-level roles at any of the four target companies.

Lightmatter is the strongest direct match given your photonics coursework (ECE 136A/B/C) and Xanadu X8 experience — no other candidate will have that combination with HPC and ML skills.
