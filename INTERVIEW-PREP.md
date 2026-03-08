# Interview Preparation — STAR Responses

**Pranav Reddy** · Electrical & Computer Engineering · UC Santa Barbara

---

## How to Use This Document

Each section below is a common interview question with a ready-to-deliver STAR response (Situation, Task, Action, Result) drawn from real projects, coursework, and experience. Responses are kept to ~60 seconds of speaking time. Modify as needed.

---

## 1. "Tell me about yourself."

I'm Pranav Reddy, an Electrical & Computer Engineering student at UC Santa Barbara. I work at the intersection of Quantum Computing, High Performance Computing, and Machine Learning. Currently I'm an undergraduate researcher in Professor Murphy Niu's Quantum Codesign Lab — she's also a senior research scientist at Google Quantum AI — where I build feedback-based quantum algorithms and parallel simulation infrastructure across 40+ CPU cores. Before that, I interned at Pando.ai building real-time LLM-powered automation pipelines for enterprise supply chains. I'm looking for opportunities where I can apply my HPC and ML skills to hard engineering problems.

---

## 2. "Tell me about a technically challenging project."

**S:** In the CQEC ML Decoder project, we needed to decode quantum errors from continuous noisy analog signals — not clean digital syndrome bits — on a 3-qubit repetition code.

**T:** Build a decoder that outperforms the theoretically optimal Bayesian filter under realistic hardware conditions.

**A:** I built a 4-phase pipeline of increasing realism. Phase 1 was static syndromes where our GRU hit 96% vs 86% for the threshold baseline. Phase 2 added Hamiltonian dynamics — coherent drive, calibration drift, measurement backaction — which broke the Bayesian filter's assumptions. Phase 3 introduced colored noise, post-flip transients, and random-walk drift. Phase 4 was the key innovation: an adaptive GRU that continues learning online via EMA-smoothed gradient updates using high-confidence pseudo-labels.

**R:** The adaptive GRU maintained 82% accuracy as hardware parameters drifted, while the Bayesian filter dropped to 70%. We wrote 244 unit tests across all phases. This demonstrates a path toward self-calibrating quantum error correction.

---

## 3. "Tell me about a time you worked on a team."

**S:** The CQEC ML Decoder was co-authored with Clark Enge at UCSB. We also worked in Group #7 for the ECE 136C Photonic Quantum Computing labs using Xanadu's X8 chip.

**T:** Divide complex research work across two people while maintaining code quality and reproducibility.

**A:** We split the work by module — I owned the simulators (sim_measurement, sim_hamiltonian, sim_nonideal, sim_drifting) and the adaptive GRU, while Clark focused on the Bayesian filter and evaluation metrics. We enforced trajectory-level train/test splits to prevent data leakage, wrote independent unit tests for each module, and reviewed each other's code before merging.

**R:** 244 unit tests, clean module boundaries, and reproducible results across all 4 phases. The codebase is open-source and structured so anyone can extend it.

---

## 4. "Tell me about a time you had to learn something quickly."

**S:** When I joined Professor Niu's Quantum Codesign Lab, I needed to get up to speed on Lyapunov-based quantum control and feedback quantum algorithms — topics I hadn't covered in coursework.

**T:** Become productive on research within weeks, not months.

**A:** I read Professor Niu's published work on quantum control optimization with deep reinforcement learning, studied the TFIM Hamiltonian formulation, and started building small simulations to test my understanding. Within two weeks I was writing the parallel simulation infrastructure and distributing workloads across 40+ CPU cores.

**R:** I'm now building multi-layer adaptive quantum circuit pipelines with real-time feedback, contributing directly to the lab's research on hardware-accelerated quantum architectures.

---

## 5. "Tell me about a time you optimized performance."

**S:** In the Quantum Codesign Lab, our simulation runs were taking hours on a single core, blocking experimentation.

**T:** Accelerate the simulation pipeline to enable rapid iteration on control parameters.

**A:** I engineered large-scale parallel simulation infrastructure that distributes workloads across 40+ CPU cores. I profiled the bottlenecks, restructured the trajectory generation to be embarrassingly parallel, and implemented proper seed management for reproducibility across parallel workers.

**R:** Experimentation cycles went from hours to minutes, enabling us to sweep over control parameters and converge on better Lyapunov control schedules faster.

---

## 6. "Tell me about a time you built something from scratch."

**S:** At Pando.ai, the supply chain team needed an intelligent automation system that could retrieve relevant context and make decisions in real time.

**T:** Build a retrieval-augmented generation (RAG) pipeline with LLM-based inference from the ground up.

**A:** I designed and built the full pipeline — document ingestion, vector retrieval, prompt engineering, and LLM inference — integrated into the existing supply chain workflow. I also built scalable alerting infrastructure and orchestration logic to handle production traffic reliably.

**R:** The system improved response reliability and operational throughput in production enterprise environments, handling real supply chain workflows at Pando.ai.

---

## 7. "Tell me about a time you dealt with ambiguity."

**S:** In Phase 3 of the CQEC project, we needed to model "non-ideal measurement effects" — but there's no single standard for what non-idealities matter most in real quantum hardware.

**T:** Decide which effects to simulate and how to parameterize them.

**A:** I researched the experimental QEC literature to identify the three most impactful non-idealities: colored noise (AR(1) process), post-flip transients (exponential ring-down), and random-walk drift in calibration. I parameterized each independently so we could sweep and isolate their effects. I wrote 99 unit tests just for this simulator to ensure correctness.

**R:** This gave us a principled Phase 3 that clearly showed which non-idealities break which decoders — the Bayesian filter's white-noise assumption was the biggest vulnerability, motivating our Phase 4 adaptive approach.

---

## 8. "What's your experience with Machine Learning?"

I've worked with ML across research and industry. In the CQEC project, I built GRU-based recurrent neural networks for time-series classification of quantum measurement signals — including an adaptive variant that does online learning during inference. At Pando.ai, I built RAG pipelines with LLM-based inference for supply chain automation. In ECE 133 (Optimization & Machine Learning), I implemented 12 supervised learning models for Raman spectroscopy mineral classification — SVM, logistic regression, custom gradient descent — achieving 0.18-0.48% test error. I'm comfortable with PyTorch, scikit-learn, NumPy, and the full training/evaluation pipeline.

---

## 9. "What's your experience with quantum computing?"

Three areas. First, in Professor Niu's Quantum Codesign Lab, I develop feedback-based quantum algorithms for Hamiltonian ground state preparation using Lyapunov control on the Transverse Field Ising Model. Second, the CQEC ML Decoder project — a 4-phase continuous quantum error correction pipeline with 244 unit tests. Third, in ECE 136C, I worked with Xanadu's X8 photonic quantum processor — Gaussian Boson Sampling with 1 million shots, Wigner function visualization, and squeezed state characterization. I also demonstrated Bell inequality violations (S=2.35) and single-photon antibunching (g²(0)=0.094) in the quantum optics labs.

---

## 10. "Why should we hire you?"

I bring three things. First, I can bridge theory and implementation — I don't just know the math behind Bayesian filters and GRU networks, I've built both from scratch and benchmarked them head-to-head with 244 unit tests. Second, I care about performance — I've parallelized simulations across 40+ cores and built production-grade pipelines at Pando.ai. Third, I adapt fast — I went from zero knowledge of Lyapunov quantum control to building the lab's parallel simulation infrastructure in weeks. I'm looking for a team where that combination of rigor, speed, and hands-on engineering matters.

---

## Quick Reference — Key Numbers

| Metric | Value | Source |
|--------|-------|--------|
| GRU decoder accuracy | 96% | CQEC Phase 1 |
| Adaptive GRU under drift | 82% vs 70% Bayesian | CQEC Phase 4 |
| Unit tests | 244 | CQEC (all phases) |
| Parallel cores | 40+ | Quantum Codesign Lab |
| Bell inequality S value | 2.35 ± 0.09 | ECE 136A/C Labs |
| Antibunching g²(0) | 0.094 | ECE 136A/C Labs |
| ML models for Raman | 12 | ECE 133 |
| Raman test error | 0.18-0.48% | ECE 133 |
| GBS shots | 1 million | ECE 136C / Xanadu X8 |


---

## Deliver Results

### Q: "Tell me about a time when you not only met a goal but considerably exceeded expectations. How were you able to do it? What challenges did you have to overcome?"

**S:** In the CQEC ML Decoder project, the original goal was straightforward — build a GRU decoder that beats a simple threshold baseline on static quantum syndrome data (Phase 1).

**T:** Deliver a working ML decoder with better accuracy than the threshold approach. That was the scope Clark and I agreed on.

**A:** Phase 1 worked — GRU hit 96% vs 86% threshold. But I realized static syndromes don't reflect real hardware. So I kept going. I built Phase 2 adding Hamiltonian dynamics (coherent drive, calibration drift, backaction) that broke the Bayesian filter's assumptions. Then Phase 3 with non-ideal effects — colored noise, post-flip transients, random-walk drift — where I wrote 99 unit tests just for that simulator. The biggest challenge was Phase 4: I had to design an adaptive GRU that learns online during inference using EMA-smoothed gradients and pseudo-labels from high-confidence predictions. This required solving the semi-supervised adaptation problem without ground truth labels at test time.

**R:** What started as a 1-phase baseline comparison became a 4-phase research pipeline with 244 unit tests, 4 simulators, and a novel adaptive decoder. The adaptive GRU maintained 82% accuracy under hardware drift while the Bayesian filter dropped to 70%. We demonstrated a path toward self-calibrating quantum error correction — far beyond the original "beat the threshold" goal.

---

### Q: "Give me an example of a time when you were able to deliver an important project under a tight deadline."

**S:** At Pando.ai, the supply chain team needed an intelligent automation pipeline that could retrieve context and make real-time decisions — and they needed it integrated into production workflows within my internship window (July 2024 – January 2025).

**T:** Design, build, and deploy a retrieval-augmented generation pipeline with LLM inference from scratch, plus alerting infrastructure, all production-ready.

**A:** I broke the work into three parallel tracks: document ingestion and vector retrieval, prompt engineering and LLM inference, and alerting/orchestration logic. I prioritized getting a minimal end-to-end pipeline working first, then iterated on retrieval quality and response reliability. The main challenge was making the alerting infrastructure scalable enough for production traffic while keeping latency low — I had to profile and optimize the orchestration logic multiple times.

**R:** Delivered the full pipeline within the internship. It improved response reliability and operational throughput in production enterprise environments. The system was handling real supply chain workflows by the time I left.

---

### Q: "Tell me about a time you had to sacrifice short-term gains for long-term results."

**S:** In the CQEC project, after Phase 1 delivered 96% accuracy, we could have published results and moved on. The GRU clearly beat the threshold baseline.

**T:** Decide whether to ship Phase 1 results or invest time building more realistic simulators that might reveal weaknesses in our approach.

**A:** I chose to build Phases 2, 3, and 4 — each adding more realistic physics that could potentially make our decoder look worse. Phase 3 was humbling: all decoders degraded under colored noise and transients, and the GRU only matched the Bayesian filter at ~83%. I could have stopped there, but the degradation motivated Phase 4 — the adaptive GRU with online learning. This required weeks of additional work designing the EMA gradient update scheme and semi-supervised adaptation.

**R:** The short-term cost was significant — months of additional development and 120+ more unit tests. But the long-term payoff was a much stronger result: we showed not just that ML decoders work, but that adaptive ML decoders can track hardware drift in real time. That's the finding that matters for real quantum hardware, and it wouldn't have existed if we'd stopped at Phase 1.

---

### Q: "Describe a situation where you had multiple competing priorities. How did you decide what to focus on?"

**S:** During Fall quarter, I was simultaneously working in Professor Niu's Quantum Codesign Lab (building parallel simulation infrastructure across 40+ cores), taking ECE 136C (Photonic Quantum Computing with Xanadu's X8 chip), and extending the CQEC project into Phases 3 and 4.

**T:** Deliver meaningful progress on all three without dropping quality on any.

**A:** I prioritized by impact and deadline. Lab research had weekly check-ins with Professor Niu, so I front-loaded the parallel infrastructure work early in the week. ECE 136C labs had fixed due dates — I blocked time for those and couldn't slip. For CQEC, I worked in focused sprints: one week on the Phase 3 simulator (99 tests), the next on the adaptive GRU. The key decision was writing thorough unit tests upfront for each module — it cost time initially but meant I could context-switch between projects without breaking things.

**R:** Delivered all three: the lab's parallel simulation infrastructure was running across 40+ cores, I completed all 8 ECE 136C labs including Gaussian Boson Sampling with 1 million shots, and the CQEC project shipped Phases 3 and 4 with 244 total unit tests.


---

## Earn Trust

### Q: "Tell me about a time you had to earn the trust of a team or stakeholder."

**S:** When I joined Professor Murphy Niu's Quantum Codesign Lab as an undergraduate researcher, I was the least experienced person in the group. Professor Niu is a senior research scientist at Google Quantum AI and Stansbury Chair in Computer Science — the bar was high.

**T:** Demonstrate that I could contribute meaningfully to active research, not just do homework-level tasks.

**A:** Instead of waiting for assignments, I proactively studied Professor Niu's published work on quantum control optimization with deep reinforcement learning. Within two weeks, I built a working prototype of the parallel simulation infrastructure and presented it at our group meeting — showing I understood both the physics and the engineering constraints. I also wrote comprehensive unit tests for every module I touched, so the team could trust my code without babysitting it.

**R:** Professor Niu gave me ownership of the parallel simulation infrastructure (40+ cores) and the adaptive quantum circuit pipeline — core components of the lab's research. I went from new undergrad to trusted contributor within a month.

---

### Q: "Describe a time when you had to give someone difficult or honest feedback."

**S:** During the CQEC project, Clark and I were reviewing Phase 2 results. Clark's initial Bayesian filter implementation was producing accuracy numbers that looked too good — 97% under Hamiltonian dynamics, which didn't match our theoretical expectations.

**T:** Flag the issue without damaging our working relationship or slowing progress.

**A:** I didn't just say "your numbers are wrong." I wrote a small diagnostic script that compared the Bayesian filter's internal belief distributions against the known ground truth at each timestep. The script revealed that the filter was accidentally using future information — a subtle data leakage bug in the windowing logic. I shared the script and the diagnosis, framing it as "I think I found something interesting in the data pipeline" rather than pointing blame.

**R:** Clark appreciated the approach, fixed the bug quickly, and the corrected Bayesian filter accuracy dropped to 94% — exactly where theory predicted. We added 22 unit tests specifically for the Bayesian filter to prevent similar issues. Our working relationship stayed strong through all 4 phases.

---

### Q: "Tell me about a time you made a mistake. How did you handle it?"

**S:** In Phase 3 of the CQEC project, I initially implemented the colored noise model incorrectly — I was generating AR(1) noise with the wrong variance scaling, which meant the noise power was growing over time instead of staying stationary.

**T:** Identify the root cause, fix it, and make sure it couldn't happen again.

**A:** I caught it when the Phase 3 decoder accuracy numbers were inconsistent across different trajectory lengths — a red flag. I traced it back to the AR(1) implementation, realized I'd forgotten the `sqrt(1 - alpha²)` normalization factor that keeps the variance constant. I fixed the formula, re-ran all experiments, and wrote 99 unit tests for the Phase 3 simulator — including explicit tests for noise stationarity, variance preservation, and autocorrelation structure.

**R:** The corrected results were consistent and reproducible. More importantly, those 99 tests became a safety net for the entire Phase 3 simulator. I was transparent about the bug with Clark — we both learned to test statistical properties, not just code paths.

---

### Q: "Tell me about a time you had to build credibility with a new group."

**S:** At Pando.ai, I joined as an intern on a team of experienced engineers who had been building supply chain software for years. I was the youngest person and had no prior industry experience.

**T:** Earn the team's confidence that I could own a production-critical component — the RAG pipeline.

**A:** I started by listening. I spent the first week understanding the existing architecture, the supply chain domain, and the team's pain points before writing any code. When I proposed the RAG pipeline design, I included a clear architecture diagram, defined failure modes, and outlined how the alerting infrastructure would handle edge cases. I shipped a minimal working version within two weeks and iterated based on the team's feedback. I also made sure my code had proper error handling and logging — production-grade from day one.

**R:** By month two, the team trusted me to own the full pipeline end-to-end. The system was running in production handling real supply chain workflows. My manager extended my internship from the original end date through January 2025.

---

### Q: "How do you handle disagreements with teammates or managers?"

**S:** In the CQEC project, Clark and I disagreed on whether to include the adaptive GRU (Phase 4). He felt Phases 1-3 were already a strong result and adding online learning was scope creep. I believed the adaptive approach was the most impactful finding.

**T:** Resolve the disagreement without damaging the partnership or forcing my preference.

**A:** I proposed a compromise: I'd build a minimal Phase 4 prototype in one week. If the adaptive GRU showed meaningful improvement over the static GRU under drift, we'd include it. If not, we'd ship Phases 1-3. I also committed to writing all the Phase 4 tests myself so it wouldn't add to Clark's workload. I built the prototype, ran the drift experiments, and shared the results — the adaptive GRU held at 82% while the static GRU dropped to 76%.

**R:** The data spoke for itself. Clark agreed Phase 4 was worth including, and he even contributed improvements to the EMA gradient scheme. We shipped all 4 phases with 244 tests. The disagreement made the project stronger because it forced me to prove the value with data, not just arguments.


---

## Dive Deep

### Q: "Tell me about a time you had to dive deep into data or a system to solve a problem."

**S:** In Phase 3 of the CQEC project, all three decoders — threshold, Bayesian, and GRU — degraded significantly when we added non-ideal measurement effects. But the degradation patterns were different and I needed to understand exactly why each decoder failed.

**T:** Diagnose the root cause of each decoder's failure mode under non-ideal conditions to inform the Phase 4 design.

**A:** I built per-class accuracy breakdowns and confusion matrices for each decoder under each non-ideality in isolation. I discovered that colored noise (AR(1)) specifically hurt the Bayesian filter because it assumes white Gaussian noise — the temporal correlations violated its likelihood model. Post-flip transients confused the threshold decoder because the signal average shifted temporarily after each flip, creating false detections. Random-walk drift degraded everyone, but the Bayesian filter worst because its static `meas_strength` parameter drifted away from reality. I also plotted the Bayesian filter's internal belief trajectories against ground truth to visualize exactly where and when it lost track.

**R:** This deep analysis directly shaped Phase 4. I knew the adaptive GRU needed to handle time-varying parameters — not just static non-idealities. That's why I designed the EMA-smoothed online learning with semi-supervised pseudo-labels. Without the deep dive, Phase 4 would have been a guess instead of a targeted solution.

---

### Q: "Give me an example of when you used data to make a decision."

**S:** In the Quantum Codesign Lab, I was building the parallel simulation infrastructure and had to decide how to distribute workloads across 40+ CPU cores — whether to parallelize at the trajectory level, the timestep level, or the parameter sweep level.

**T:** Choose the parallelization strategy that maximizes throughput for our specific workload profile.

**A:** I profiled the simulation at each level. Timestep-level parallelism had too much inter-step dependency (each timestep depends on the previous error state) — the overhead of synchronization killed the speedup. Parameter sweep parallelism worked but left cores idle during the analysis phase. Trajectory-level parallelism was embarrassingly parallel — each trajectory is independent with its own RNG seed — and the overhead was just seed distribution. I benchmarked all three with 1000 trajectories and measured wall-clock time, CPU utilization, and memory footprint.

**R:** Trajectory-level parallelism gave near-linear speedup across 40+ cores with minimal memory overhead. Simulation runs dropped from hours to minutes. I chose the approach the data supported, not the one that seemed most sophisticated.

---

### Q: "Tell me about a time you found a root cause that others had missed."

**S:** During the ECE 136C Photonic Quantum Computing labs, our group's Gaussian Boson Sampling results on the Xanadu X8 chip showed unexpected photon number distributions that didn't match the theoretical predictions.

**T:** Figure out why our experimental GBS results diverged from theory before the lab report deadline.

**A:** Most of the group assumed it was just hardware noise. I dug deeper — I compared our raw photon count histograms against the theoretical thermal state distribution and the ideal GBS distribution separately. I realized we were using 4-photon post-selection but hadn't accounted for the chip's mode-dependent loss rates. The X8 has 8 modes (4 spatial × 2 frequency), and the frequency modes had measurably higher loss. When I re-weighted the post-selection to account for mode-dependent transmission, the distributions aligned.

**R:** Our corrected analysis matched theory within error bars. The lab report included the mode-dependent loss correction as a finding, and the TA flagged it as one of the stronger analyses in the class. The key was not accepting "it's just noise" as an explanation.

---

### Q: "Describe a time when you had to understand a complex system quickly."

**S:** When I started the CQEC project, I needed to understand the full quantum error correction pipeline — stabilizer codes, syndrome measurements, Wonham filters, and how continuous analog readout differs from discrete syndrome extraction.

**T:** Go from textbook QEC knowledge to a working simulation and decoder pipeline.

**A:** I built understanding bottom-up through code. First, I implemented the quantum operators from scratch — Pauli matrices, tensor products, stabilizers S₁ and S₂, the error signature lookup table — and wrote 44 unit tests to verify the math (eigenvalue checks, orthogonality, syndrome uniqueness). Then I built the Phase 1 simulator, verifying each step against hand calculations. Only after the foundation was solid did I implement the decoders. Each layer of understanding was validated by tests before building the next.

**R:** The 44 operator tests caught two subtle bugs in my initial tensor product implementation that would have silently corrupted all downstream results. Building understanding through tested code — not just reading papers — meant I had confidence in every layer of the system.

---

### Q: "Tell me about a time you questioned a commonly held assumption."

**S:** The standard approach in QEC research is to evaluate decoders on static noise models — fixed error rates, constant measurement strength, white Gaussian noise. Most papers report accuracy under these ideal conditions.

**T:** Determine whether these standard benchmarks actually predict decoder performance on real hardware.

**A:** I systematically broke each assumption. Phase 2 added time-dependent dynamics (the Bayesian filter dropped from 94% to lower accuracy under drive and drift). Phase 3 added colored noise and transients (all decoders degraded, but differently). Phase 4 added parameter drift over time (static decoders degraded progressively while the adaptive GRU held steady). Each phase had its own simulator with independent unit tests so the results were trustworthy.

**R:** The data showed that static benchmarks are misleading — a decoder that scores 94% on Phase 1 can drop to 70% under realistic drift. The adaptive GRU's advantage only appears when you test under realistic conditions. This finding — that the benchmark matters as much as the decoder — is arguably the most important result of the project.


---

## Learn and Be Curious

### Q: "Tell me about a time you taught yourself something new to solve a problem."

**S:** Phase 4 of the CQEC project required online learning — the adaptive GRU needed to update its weights during inference without ground truth labels. I'd never implemented semi-supervised adaptation or EMA-smoothed gradient updates before.

**T:** Design and implement an online learning scheme that works reliably without labeled data at test time.

**A:** I studied the test-time adaptation literature — particularly entropy minimization and pseudo-labeling techniques from domain adaptation research. I learned how EMA gradient smoothing prevents noisy single-sample updates from destabilizing the model. I prototyped three approaches: pure entropy minimization, hard pseudo-labels, and confidence-thresholded pseudo-labels with EMA gradients. I benchmarked each on synthetic drift trajectories where I controlled the drift rate and could measure ground truth.

**R:** The confidence-thresholded approach with EMA gradients won — it maintained 82% accuracy under drift while the other two were unstable. I went from zero knowledge of test-time adaptation to a working implementation with 21 unit tests in about a week. That self-taught technique became the core innovation of Phase 4.

---

### Q: "Tell me about a time your curiosity led you to explore something beyond your immediate responsibilities."

**S:** In ECE 136C, the lab assignments focused on running pre-built Strawberry Fields circuits on Xanadu's X8 chip. The scope was: execute the circuit, collect data, write the report.

**T:** Complete the lab requirements — but I wanted to understand why the photon statistics looked the way they did.

**A:** After finishing the required work, I went deeper. I visualized Wigner functions for vacuum, squeezed, coherent, and displaced states to build intuition about phase space. I implemented 4-photon post-selection on 1 million GBS shots and compared the distributions against both thermal and ideal GBS predictions. I also investigated mode-dependent loss rates across the X8's 8 modes (4 spatial × 2 frequency) and found that frequency modes had measurably higher loss — which explained distribution mismatches other groups were dismissing as noise.

**R:** My analysis of mode-dependent loss correction was flagged by the TA as one of the stronger findings in the class. More importantly, the intuition I built about photonic quantum systems directly informed my later work in the Quantum Codesign Lab — I could reason about hardware constraints because I'd gone beyond the assignment.

---

### Q: "What's the most recent thing you learned, and how did you apply it?"

**S:** When I joined Professor Niu's Quantum Codesign Lab, I needed to learn Lyapunov-based quantum control — a topic that combines control theory, quantum mechanics, and optimization in a way none of my courses had covered.

**T:** Get productive on the lab's research on feedback quantum algorithms for the Transverse Field Ising Model.

**A:** I read Professor Niu's published work on quantum control optimization with deep reinforcement learning and his research on real-time feedback control using neural networks. I focused on understanding the specific formulation: an explicit time-dependent control schedule β(t) with learnable parameters, optimized to accelerate convergence to low-energy states. I built small simulations to test my understanding before touching the lab's codebase.

**R:** Within weeks I was building the lab's parallel simulation infrastructure across 40+ cores and designing multi-layer adaptive quantum circuit pipelines with real-time feedback. The Lyapunov control framework I learned is now central to my daily research work.

---

### Q: "Tell me about a time you explored a new technology or tool that improved your work."

**S:** Early in the CQEC project, I was writing unit tests manually — checking individual values, hardcoding expected outputs. It was slow and the tests were brittle.

**T:** Find a better testing approach for scientific computing code where exact numerical equality is often impossible.

**A:** I explored property-based testing concepts and NumPy's testing utilities. Instead of checking exact values, I started testing mathematical properties: stabilizer eigenvalues must be ±1, error signatures must be unique, transition matrices must be row-stochastic, Bayesian beliefs must sum to 1, noise variance must be stationary for AR(1). I also used `np.allclose` with appropriate tolerances for floating-point comparisons and wrote compatibility tests verifying that Phase 2 with dynamics=0 exactly reproduces Phase 1 output.

**R:** This approach scaled beautifully — 244 tests across 4 phases, each testing properties rather than brittle values. The compatibility test between Phase 1 and Phase 2 caught a subtle RNG seed handling bug that would have been invisible to value-based tests. Testing properties instead of values is now my default approach for any scientific code.

---

### Q: "How do you stay current in your field?"

**S:** Quantum Computing and ML are both fast-moving fields. Research from even two years ago can be outdated.

**T:** Stay informed enough to make good technical decisions in my research and projects.

**A:** Three channels. First, I read the work of researchers I collaborate with directly — Professor Niu's publications on quantum control with RL, his work on circuit optimization with deep reinforcement learning, and the broader Google Quantum AI output. Second, I learn by building — every new concept I encounter (Wonham filters, GRU decoders, adaptive online learning, Gaussian Boson Sampling) I implement from scratch with tests before using it in a project. Third, I cross-pollinate between domains — my Pando.ai work on RAG pipelines taught me about production ML systems, which informed how I think about real-time decoding latency in QEC.

**R:** This approach means I don't just know about techniques — I've built them. When I encounter a new problem, I can draw on implementations I've written, not just papers I've read. The CQEC project's 4-phase evolution is a direct result of this learn-by-building habit.


---

## Functional: AgenticAI Usage

*Questions grouped into 3 core themes. Each response covers multiple angles interviewers probe from this competency.*

---

### Theme 1: Identifying AgenticAI Use Cases & Building Solutions

**Q: "Tell me about a time you identified a use case for AgenticAI that improved efficiency. How did you validate it before implementing?"**

**S:** At Pando.ai, the supply chain operations team was manually triaging incoming alerts — reading shipment updates, cross-referencing documentation, and deciding which alerts needed human action. Each alert took 3-5 minutes of context gathering before a decision could be made.

**T:** Determine whether AgenticAI could automate the context-gathering step while keeping humans in the decision loop.

**A:** I noticed the pattern: 80% of the work was retrieval (finding the right docs), not reasoning. That's a textbook RAG use case. Before building the full pipeline, I validated with a small proof-of-concept — I took 50 historical alerts, manually identified the correct context documents, then tested whether vector retrieval + LLM summarization could surface the same context. I measured retrieval precision and checked whether the LLM summaries contained the key decision-relevant facts. Only after the POC showed >90% retrieval accuracy did I build the production pipeline.

**R:** The full RAG pipeline reduced alert triage time significantly by pre-fetching and summarizing relevant context. The key learning: good AgenticAI applications automate the retrieval and synthesis, not the judgment. I designed it so the LLM surfaces information but a human makes the final call.

---

### Theme 2: Responsible Use — Oversight, Risks & Data Protection

**Q: "Describe how you balanced AgenticAI automation with human oversight. How did you handle sensitive data and communicate risks to stakeholders?"**

**S:** The Pando.ai RAG pipeline processed real enterprise supply chain data — shipment details, vendor contracts, operational alerts. The team was excited about full automation, but I had concerns about three things: data sensitivity, hallucination risk, and accountability.

**T:** Design a system that captures AgenticAI efficiency gains while maintaining human accountability and data protection.

**A:** Three safeguards. First, data protection: I ensured all document processing stayed within Pando's infrastructure — no external API calls with raw customer data. The vector embeddings were generated locally, and the LLM inference used approved enterprise endpoints only. Second, human oversight: I designed the pipeline as "AI-assisted, human-decided" — the LLM generates a context summary and suggested action, but a human reviews and approves before any action executes. The system logs every LLM output alongside the human decision for audit. Third, risk communication: when stakeholders pushed for full automation, I showed them specific examples where the LLM confidently summarized incorrect context — a shipment delay attributed to the wrong vendor. I framed it as "the system is 90% accurate at retrieval, which means 1 in 10 alerts gets wrong context — in supply chain, that's a missed delivery." That concrete example shifted the conversation from "why can't we automate everything" to "where do we put the human checkpoint."

**R:** The team adopted the human-in-the-loop design. The alerting infrastructure included confidence scores so humans could fast-track high-confidence summaries and scrutinize low-confidence ones. Zero data incidents during my tenure. The learning: stakeholders respond to concrete failure examples, not abstract risk percentages.

---

### Theme 3: Evaluating, Refining & Teaching AgenticAI Output Quality

**Q: "Tell me about a time you had to refine AgenticAI output to meet quality standards, and how you taught others to do the same."**

**S:** When building this portfolio website, I used AgenticAI tools extensively for code generation, content writing, and design iteration. The raw outputs were functional but had consistent quality gaps — generic emoji icons that looked AI-generated, boilerplate descriptions that didn't reference actual project details, and inconsistent capitalization of domain terms like "Quantum Computing."

**T:** Refine the outputs to professional quality and develop a repeatable process for getting better results.

**A:** I developed a three-pass refinement approach. First pass — factual grounding: I replaced every generic description with specific numbers and references from the actual codebase (96% GRU accuracy, 244 unit tests, 40+ CPU cores, Bell inequality S=2.35). Second pass — visual authenticity: I replaced all emoji icons with purpose-built SVG icons matching each card's topic, ensuring the site doesn't look "AI-generated." Third pass — consistency: I audited capitalization ("Quantum Computing" not "quantum computing"), verified all hyperlinks pointed to real UCSB catalog pages and GitHub repos, and checked that the color palette was uniform across all pages. For getting better initial results, I learned to front-load context — providing the actual source code, README content, and resume text in the prompt rather than asking the AI to guess. The more specific the input, the less refinement needed.

**R:** The final site has consistent branding, every claim is backed by real project data, and no section looks like unedited AI output. The refinement process — factual grounding, visual authenticity, consistency audit — is now my default workflow for any AgenticAI-assisted work. The key insight: AgenticAI is a first-draft tool, not a final-draft tool. The value is in knowing what to fix and having the domain knowledge to fix it.


---

### Theme 4: Fact-Checking & Verifying AgenticAI Output

**Q: "Describe a time you had to fact-check information from an AgenticAI tool before using it for an important project."**

**S:** While building the portfolio site, I used AgenticAI to draft project descriptions for the CQEC ML Decoder card. The initial output described the project as "comparing rule-based, Bayesian, and ML decoders on a 5-qubit surface code" — which sounded plausible but was wrong. The actual project uses a 3-qubit repetition code.

**T:** Catch inaccuracies before they went live on a public-facing portfolio that potential employers and collaborators would read.

**A:** Three things made me suspicious: the "5-qubit" claim didn't match my memory, the "surface code" terminology was wrong for our stabilizer structure, and the description was too generic — it could describe any QEC project. I cross-referenced against the actual source code (`operators.py` defines a 3-qubit space with `ket_0L[0]=1` and `ket_1L[7]=1` — that's `|000⟩` and `|111⟩`, clearly 3-qubit), the README's results tables, and the unit test counts. I also verified every hyperlink — the GitHub repo URL, UCSB catalog course links, Professor Niu's faculty page — by actually clicking them. I now build fact-checking into my process: every AgenticAI-generated claim gets verified against the primary source (code, data, or official documentation) before it goes into any deliverable.

**R:** Caught and corrected multiple inaccuracies across the site — wrong GitHub username (`pranavreddy` vs the correct `pkarakala`), missing lab PDFs (ECE 136C had 8 labs, not 1), and generic descriptions replaced with specific numbers from the codebase. The rule I follow now: if an AgenticAI output contains a specific number, name, or technical claim, verify it against the source of truth before using it.


---

## AgenticAI Fluency — Question Mapping

| Question | Theme |
|----------|-------|
| Identify AgenticAI use case & validate before implementing | Theme 1: Identifying Use Cases |
| Spot problems in AgenticAI output that initially looked good | Theme 4: Fact-Checking & Verification |
| Balance AgenticAI automation with human oversight | Theme 2: Responsible Use & Oversight |
| Develop metrics for measuring AgenticAI output quality | Theme 3: Evaluating & Refining Output |
| Handle sensitive data while using AgenticAI tools | Theme 2: Responsible Use & Oversight |
| Recognize when AgenticAI is NOT the right solution | Theme 5: Knowing When NOT to Use AgenticAI |
| Communicate AgenticAI risks to enthusiastic stakeholders | Theme 2: Responsible Use & Oversight |
| Learn new AgenticAI capabilities to solve a problem | Theme 1: Identifying Use Cases |
| Refine AgenticAI output to meet quality standards | Theme 3: Evaluating & Refining Output |
| Use AgenticAI for personal productivity tasks | Theme 1: Identifying Use Cases |
| Teach others to evaluate and refine AgenticAI outputs | Theme 3: Evaluating & Refining Output |
| Decide against AgenticAI due to ethical/compliance concerns | Theme 5: Knowing When NOT to Use AgenticAI |
| Fact-check AgenticAI information for important project | Theme 4: Fact-Checking & Verification |

---

### Additional Responses

---

### Spotting Hidden Problems in AgenticAI Output

**Q: "Tell me about a time AgenticAI output initially looked good but had problems on closer inspection."**

**S:** While building the portfolio site, I used AgenticAI to generate project card descriptions and link references. The CQEC card initially read well — correct tone, good structure, plausible technical details.

**T:** Ensure every claim on a public portfolio is accurate before publishing.

**A:** Three red flags on closer inspection. First, the GitHub repo URL used `pranavreddy` instead of the correct `pkarakala` — it looked right at a glance but pointed to a nonexistent repo. Second, the Raman Spectroscopy card linked to a GitHub repo that doesn't exist — the actual deliverable is a PDF report. Third, the ECE 136C card showed a single "Labs PDF" link when the actual course had 8 individual lab PDFs. Each error was plausible enough to pass a quick scan but wrong on verification. My process now: for every AgenticAI output, I verify proper nouns (names, URLs, repo paths) against the source, check quantities (number of labs, test counts) against the codebase, and click every hyperlink.

**R:** Caught and fixed all three before publishing. I now treat AgenticAI output like a junior engineer's first PR — the structure is usually right, but the specifics need line-by-line review against ground truth.

---

### Developing Quality Metrics for AgenticAI Output (Theme 3)

**Q: "Tell me about developing metrics for measuring AgenticAI output quality."**

**S:** At Pando.ai, after deploying the RAG pipeline, I needed to measure whether the LLM-generated context summaries were actually useful for the operations team — not just fluent.

**T:** Define measurable quality standards beyond "does it sound right."

**A:** I established three metrics. First, retrieval precision — did the vector search surface the correct source documents? I measured this against a manually labeled set of 50 historical alerts. Second, factual coverage — did the LLM summary contain all decision-relevant facts from the source docs? I built a checklist of key fields (shipment ID, vendor, delay reason, ETA) and scored each summary. Third, actionability — could the operator make a decision from the summary alone without opening the source docs? I tracked how often operators clicked through to source documents after reading the summary. Baseline was 100% click-through (no AI); the target was under 30%.

**R:** Retrieval precision hit 92%, factual coverage averaged 88%, and click-through dropped to ~25%. The metrics evolved over time — I added a "hallucination rate" metric after finding cases where the LLM confidently stated facts not present in any source document. That metric became the most important one for stakeholder trust.

---

### Recognizing When AgenticAI Is NOT the Right Solution (Theme 5)

**Q: "Describe a situation where AgenticAI was not the right solution."**

**S:** In the CQEC project, I briefly considered using an LLM to generate unit tests for the Phase 3 non-ideal measurement simulator — 99 tests is a lot of manual work.

**T:** Decide whether AgenticAI-generated tests would be trustworthy for validating scientific simulation code.

**A:** I tried it. The LLM generated syntactically correct tests that checked basic things — function returns the right shape, no exceptions thrown. But the tests missed what actually matters for scientific code: mathematical properties. They didn't test that AR(1) noise variance is stationary, that post-flip transients decay exponentially, or that random-walk drift has the correct diffusion rate. The LLM couldn't generate these because it doesn't understand the physics — it was pattern-matching on test structure, not testing correctness properties. I realized the tests needed domain expertise that the LLM didn't have.

**R:** I wrote all 99 tests manually, each targeting a specific physical property. Those tests caught the AR(1) variance scaling bug that would have been invisible to the LLM-generated tests. The lesson: AgenticAI works well for boilerplate and structure, but fails for domain-specific correctness validation where the test logic requires understanding the science.

---

### Learning New AgenticAI Capabilities (Theme 1)

**Q: "Tell me about learning new AgenticAI capabilities to solve a problem."**

**S:** At Pando.ai, the initial RAG pipeline used simple keyword-based retrieval. The operations team reported that it was missing relevant documents when the query phrasing didn't match the document terminology — "shipment delay" vs "transit hold."

**T:** Improve retrieval quality by learning and implementing semantic search with vector embeddings.

**A:** I researched embedding models and vector databases — this was new territory for me. I experimented with different embedding approaches, tested retrieval quality on our labeled dataset of 50 alerts, and compared precision against the keyword baseline. I also learned about chunking strategies — how document splitting affects retrieval quality — and tested different chunk sizes. The key validation was A/B testing: I ran both retrieval methods on the same queries and compared which surfaced the correct documents more often.

**R:** Semantic retrieval improved precision from ~75% (keyword) to 92%. The biggest learning was that the embedding model choice mattered less than the chunking strategy — poorly chunked documents produced bad results regardless of the model. I validated this empirically before committing to the production implementation.

---

### Using AgenticAI for Personal Productivity (Theme 1)

**Q: "Tell me about using AgenticAI for personal tasks."**

**S:** I needed to build a professional portfolio website but I'm not a frontend developer — my expertise is in quantum computing, HPC, and ML. Hand-coding HTML/CSS from scratch would have taken weeks.

**T:** Build a polished, multi-page portfolio site efficiently without deep frontend expertise.

**A:** I used an AI-assisted coding tool as a pair programmer. I experimented with different approaches: first I tried asking for a complete site in one shot — the output was generic and unusable. Then I switched to incremental iteration — one section at a time, providing specific context (actual project data, resume content, GitHub README) with each request. I learned that AgenticAI works best for personal tasks when you treat it as a collaborator, not a contractor: give it the raw material, let it draft, then refine with domain knowledge. The tasks that benefited most: CSS styling, responsive breakpoints, SVG icon generation, and boilerplate HTML structure. The tasks that didn't: writing authentic project descriptions (needed my actual data), choosing what to highlight (needed my judgment), and verifying technical accuracy (needed my domain knowledge).

**R:** Built a complete 5-page portfolio with dark mode, hamburger menu, hyperlinked coursework, local PDFs, and consistent branding — in a fraction of the time it would have taken manually. The key learning: AgenticAI amplifies productivity most when you know exactly what you want but need help with the how.

---

### Deciding Against AgenticAI for Ethical/Compliance Reasons (Theme 5)

**Q: "Tell me about deciding against AgenticAI due to ethical or compliance concerns."**

**S:** In Professor Niu's Quantum Codesign Lab, I was writing up results for the Lyapunov control optimization work. I considered using an LLM to help draft the technical writeup to save time.

**T:** Decide whether using AgenticAI for research documentation was appropriate given the lab's confidentiality requirements.

**A:** Three concerns stopped me. First, the research is unpublished and partially confidential — feeding proprietary control schedules and simulation results into an external LLM would risk exposing unpublished work. Second, academic integrity — any text in a research context needs to be genuinely authored, and using LLM-generated prose without disclosure would be problematic. Third, accuracy — the Lyapunov control formulation involves specific mathematical notation (β(t) schedules, TFIM Hamiltonians, convergence criteria) where LLM hallucination could introduce subtle errors that look correct but aren't. I evaluated the tradeoff: the time savings were modest (a few hours), but the risks (IP exposure, integrity questions, mathematical errors) were significant.

**R:** I wrote the documentation manually. For the portfolio site, I described the project at a high level only — "implementation details confidential" — which is the same boundary the lab maintains publicly. The rule: if the data is unpublished research, proprietary, or requires mathematical precision, AgenticAI is not the right tool. I use it freely for public-facing content where I can verify every claim.


---

## Coursework-Grounded Responses

*These responses highlight how specific courses built the foundation for project and research work.*

---

### Q: "How has your academic background prepared you for this role?"

**S:** My ECE coursework at UCSB was deliberately chosen to span the full stack — from semiconductor physics to digital design to signal processing to quantum systems.

**T:** Build a technical foundation broad enough to work at the hardware-software interface.

**A:** The foundation layers: ECE 130A/B (Signal Processing & Linear Systems) gave me Fourier transforms, Laplace transforms, and discrete-time analysis — which is exactly the math behind the windowed time-series processing in the CQEC decoder pipeline. ECE 152A (Digital Design Principles) taught me how logic maps to hardware — relevant to my interest in computer architecture and hardware-accelerated quantum systems. ECE 132 (Semiconductor Devices) and ECE 134 (Electromagnetics & Wave Phenomena) gave me the physics of how signals propagate through real hardware — why transmission lines have impedance, why detectors have noise floors, why measurement backaction exists. The application layers: ECE 136A/B/C (Optics, Photonic Imaging, Quantum Computing & Photonics) let me apply that foundation to real quantum hardware — from lens imaging to Wigner functions to Gaussian Boson Sampling on Xanadu's X8 chip. ECE 133 (Optimization & Machine Learning) connected the math to data-driven methods — gradient descent, SVMs, the optimization landscape that underlies both classical ML and quantum control.

**R:** Every course feeds into my research. The signal processing from ECE 130A/B is why I understood how to design the windowed measurement pipeline. The device physics from ECE 132/134 is why I could model measurement backaction and calibration drift realistically in the CQEC simulator. The digital design from ECE 152A is why I think about latency and parallelism when building the 40+ core simulation infrastructure. It's not separate courses — it's one integrated skill set.

---

### Q: "Tell me about a time you applied classroom knowledge to solve a real-world problem."

**S:** In Phase 2 of the CQEC project, I needed to simulate calibration drift — the measurement strength slowly changing over time, which is a real effect in quantum hardware.

**T:** Model this drift realistically enough that our decoder benchmarks would predict real-hardware performance.

**A:** ECE 130A (Signal Processing) taught me about time-varying systems and how linear drift affects signal-to-noise ratio over time. ECE 134 (Electromagnetics) gave me intuition about why measurement strength drifts — temperature fluctuations change material properties, which change coupling coefficients. ECE 132 (Semiconductor Devices) taught me about noise sources in detectors — shot noise, thermal noise, 1/f noise — which informed the backaction noise model. I combined these: the Phase 2 simulator uses `meas_strength_t[t] = meas_strength + drift_rate * t * dt` for linear drift and adds Gaussian backaction noise — both grounded in the physics I learned in those courses, not just arbitrary parameters.

**R:** The Bayesian filter's accuracy dropped from 94% to significantly lower under drift — exactly because it assumes static measurement strength (the textbook assumption from ECE 130A that real hardware violates). The GRU learned the drift pattern from data. Without the coursework foundation, I would have modeled drift as random noise instead of the systematic linear effect it actually is.

---

### Q: "What technical skills from your education are most relevant to this position?"

**S:** Interviewers often expect a list of tools. I think the more useful answer is how the skills connect.

**T:** Show that my coursework builds a coherent technical stack, not just isolated classes.

**A:** Three layers. The math layer — ECE 130A/B gave me Fourier analysis, convolution, Z-transforms, and sampling theory. These aren't abstract — I use them every time I design a windowed measurement pipeline or analyze frequency-domain properties of colored noise in the CQEC simulator. The hardware layer — ECE 152A (digital design), ECE 132 (semiconductors), ECE 134 (electromagnetics) taught me how computation maps to physical systems. When I parallelize simulations across 40+ cores in the Quantum Codesign Lab, I think about memory hierarchy and data locality because ECE 152A taught me that hardware has structure. The application layer — ECE 133 (optimization/ML) and ECE 136A/B/C (optics through quantum computing) let me apply both layers to real problems. The GRU decoder in CQEC uses gradient-based optimization (ECE 133) on time-series data (ECE 130A/B) from a quantum system (ECE 136C) with realistic noise models (ECE 132/134).

**R:** The value isn't any single course — it's that I can trace a line from semiconductor noise physics through signal processing through machine learning to a working adaptive quantum error correction decoder. That full-stack understanding is what lets me build systems that work under real hardware constraints.


---

## General Behavioral — Campus Life & Personal

### Q: "What do you do outside of academics?"

I'm an outgoing person who thrives in collaborative settings. I play tennis regularly — it's my reset after long coding sessions. I'm a huge Warriors fan, so game nights are non-negotiable. At UCSB, the campus culture is uniquely collaborative — people across ECE, CS, and Physics departments share ideas freely, which is how I ended up connecting with Professor Niu's lab in the first place. I genuinely enjoy bouncing ideas around with people from different backgrounds — some of my best project insights came from casual conversations, not formal meetings.

---

### Q: "How do you handle stress or heavy workloads?"

**S:** Fall quarter I was juggling Professor Niu's lab, ECE 136C labs on the Xanadu X8 chip, and extending the CQEC project into Phases 3 and 4 — all at once.

**T:** Stay productive without burning out.

**A:** Two things keep me grounded. First, I time-block ruthlessly — lab research early in the week, coursework on fixed deadlines, CQEC in focused weekend sprints. Second, I decompress physically — tennis, walks along the UCSB lagoon, Warriors games with friends. I've learned that stepping away for an hour often unblocks a problem faster than staring at code. The AR(1) variance bug in Phase 3? I caught the insight during a walk, not at my desk.

**R:** Delivered all three commitments on time with quality I'm proud of. The key is that I don't treat stress as something to power through — I treat it as a signal to structure my time better and protect my recovery.

---

### Q: "Why UCSB, and how has it shaped you?"

UCSB is one of the few places where you can take a quantum optics lab in the morning, work on photonic quantum computing in the afternoon, and grab dinner with people building quantum control algorithms — all on the same campus. The ECE and Physics departments here are world-class in photonics and quantum information, which is exactly why I chose it. Professor Niu's lab sits at the intersection of CS and quantum physics — that kind of cross-departmental collaboration is baked into UCSB's culture. The campus itself keeps you grounded — it's hard to take yourself too seriously when you're debugging code with the Pacific Ocean in the background. That balance of intensity and perspective is something I'll carry into any team I join.


---

### Q: "Tell me about a leadership experience outside of academics or work."

**S:** I joined Sigma Phi Epsilon at UCSB — something completely outside my engineering comfort zone. Greek life wasn't something I'd explored before, and I didn't know what to expect.

**T:** I was elected Chapter Vice President and also served as Housing Manager — two roles that required managing people, budgets, and logistics at a scale I'd never handled.

**A:** As VP, I oversaw a $150,000+ budget for brotherhood and community events, created and maintained a quarterly events calendar coordinating with internal groups and external organizations, and hosted 2+ large-scale events per quarter. The biggest was a luxury vineyard formal for 140+ guests — I coordinated transportation, event insurance, venue booking, and catering end-to-end. As Housing Manager, I was the liaison between 28 residents and national headquarters on lease agreements, contract management, and compliance. I managed property maintenance, safety inspections, and negotiated with a third-party food services provider to keep residents satisfied.

**R:** The experience taught me things engineering courses don't — how to manage a budget with real consequences, how to negotiate contracts, how to coordinate logistics across multiple vendors under a hard deadline. More importantly, I discovered a side of myself I didn't know existed. I made lifelong friends, learned to lead people who aren't obligated to follow you, and found that giving back to a community is as fulfilling as solving a hard technical problem. It made me a more complete person and a better collaborator in every team I've been on since.

---

### Q: "What's something you're involved in that might surprise people?"

I'm the Chapter Vice President of Sigma Phi Epsilon at UCSB. People hear "quantum computing researcher" and don't expect Greek life — but that's exactly why I joined. I wanted to grow in ways that a lab or a codebase can't teach you. Managing a $150,000+ budget, coordinating a formal for 140 guests, negotiating food service contracts for 28 residents — these are real-world leadership and operations challenges. The brothers I've met come from completely different backgrounds than my ECE cohort, and that diversity of perspective has made me a better thinker and communicator. I joined because I wanted to discover who I am outside of engineering, and I found that the skills transfer both ways — the rigor I bring from research helps me plan events, and the people skills I've built in the chapter make me a better teammate in the lab.
