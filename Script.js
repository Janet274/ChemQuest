const lessons = [
	{
		id: "introduction", slug: "lesson-introduction.html", title: "Introduction to Redox Reactions", tag: "THE ELECTRON EXCHANGE",
		description: "Discover what a redox reaction is by following electrons between reactants.",
		objectives: ["Describe oxidation and reduction as coupled electron-transfer processes.", "Recognise changes in oxidation state in a simple displacement reaction."],
		intro: "Redox reactions link electron transfer to chemical change. They explain metal displacement, combustion, corrosion, and many reactions in living cells. A useful first question is: which species gives electrons away, and which accepts them?",
		steps: [
			{ heading: "Step 1 · Core concepts", body: "<p><strong>Oxidation</strong> is the loss of electrons; <strong>reduction</strong> is the gain of electrons. Remember OIL RIG: <em>Oxidation Is Loss; Reduction Is Gain</em>. The two processes occur together because electrons released by one species must be accepted by another.</p><p>Oxidation state (oxidation number) is a bookkeeping value. An increase indicates oxidation; a decrease indicates reduction. Electrons carry a negative charge, so losing electrons makes a species more positive.</p><div class=\"equation-card\">Oxidation: loss of e⁻, oxidation state rises<br>Reduction: gain of e⁻, oxidation state falls</div>" },
			{ heading: "Step 2 · Follow the half-reactions", body: "<p>When magnesium is placed in copper(II) sulfate solution, magnesium atoms transfer electrons to copper(II) ions. The sulfate ions are spectators: they do not take part in the electron transfer.</p><div class=\"equation-card\">Overall: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s)</div><ol class=\"worked-steps\"><li><strong>Magnesium oxidation:</strong> Mg(s) → Mg²⁺(aq) + 2e⁻. One neutral magnesium atom loses two electrons and becomes a 2+ ion.</li><li><strong>Copper reduction:</strong> Cu²⁺(aq) + 2e⁻ → Cu(s). A copper(II) ion gains the same two electrons and becomes a neutral atom.</li><li>Add the half-equations. The two electrons cancel, leaving the balanced overall ionic equation. Atoms and total charge balance on both sides.</li></ol><p><strong>Electron flow:</strong> magnesium is the electron donor; Cu²⁺ is the electron acceptor.</p>" },
			{ heading: "Step 3 · Check the evidence", body: "<p>The reactants contain Mg at oxidation state 0 and Cu at +2. In the products, magnesium is +2 and copper is 0. Both oxidation states change, which is the evidence for electron transfer and a redox reaction.</p><div class=\"equation-card\">Mg: 0 → +2 (oxidised) &nbsp; | &nbsp; Cu: +2 → 0 (reduced)</div><aside class=\"mistake-box\"><strong>COMMON MISCONCEPTION</strong><p>A reaction is not automatically redox simply because it contains ions, looks dramatic, or forms a solid. Compare oxidation states before and after: if none change, the reaction is not redox. Oxidation and reduction always occur together.</p></aside><p>In the knowledge check, decide which particles change oxidation state rather than relying only on a reaction's appearance.</p>" }
		]
	},
	{
		id: "oxidation-reduction", slug: "lesson-oxidation-reduction.html", title: "Oxidation and Reduction", tag: "FOLLOW THE ELECTRONS",
		description: "Use electron transfer and oxidation-state changes to distinguish oxidation from reduction.",
		objectives: ["Define oxidation and reduction using electron transfer.", "Write and interpret simple oxidation and reduction half-equations."],
		intro: "Electron transfer is a precise way to identify oxidation and reduction. Half-equations make the electrons visible so you can check both the atoms and the charge in each process.",
		steps: [
			{ heading: "Step 1 · The electron definitions", body: "<p><strong>Oxidation</strong> means losing electrons; <strong>reduction</strong> means gaining electrons. OIL RIG is a useful memory aid. Losing negatively charged electrons raises the oxidation state; gaining electrons lowers it.</p><div class=\"equation-card\">Oxidation: Zn → Zn²⁺ + 2e⁻<br>Reduction: Cu²⁺ + 2e⁻ → Cu</div><p>Count electrons as particles, not as changes in the number of atoms. The electron count must agree with the charge change.</p>" },
			{ heading: "Step 2 · Read half-equations", body: "<p>A half-equation describes only oxidation or only reduction. Electrons appear on the product side when they are lost, and on the reactant side when they are gained.</p><ol class=\"worked-steps\"><li>For Zn → Zn²⁺, the zinc atom changes from 0 to +2. Add two electrons to the product side: <strong>Zn → Zn²⁺ + 2e⁻</strong>.</li><li>Check charge: the left side is 0; the right side is +2 − 2 = 0.</li><li>For Cu²⁺ → Cu, copper's charge changes from +2 to 0. Add two electrons to the reactant side: <strong>Cu²⁺ + 2e⁻ → Cu</strong>.</li><li>Add the half-equations only after matching the electrons lost and gained.</li></ol><div class=\"equation-card\">2e⁻ lost = 2e⁻ gained</div>" },
			{ heading: "Step 3 · Avoid sign mix-ups", body: "<p>An increase from −2 to −1 is also an increase, even though both values are negative. A decrease from +3 to 0 is reduction. Compare the number line values carefully.</p><aside class=\"mistake-box\"><strong>COMMON MISCONCEPTION</strong><p>Reduction does not mean an oxidation state must become negative; it means that it decreases. Do not put lost electrons on the reactant side or gained electrons on the product side.</p></aside><p>Always check that both the number of each atom and the total charge are the same on both sides of a half-equation.</p>" }
		]
	},
	{
		id: "oxidation-numbers", slug: "lesson-oxidation-numbers.html", title: "Oxidation Numbers and Their Rules", tag: "THE CHARGE CLUE",
		description: "Assign oxidation states using reliable rules and solve for an unknown in ions.",
		objectives: ["Apply oxidation-number rules to elements, compounds, and polyatomic ions.", "Calculate an unknown oxidation state using the total charge."],
		intro: "Oxidation states are assigned numbers used to track electron transfer. They are not always the actual charge on an atom, especially in covalent compounds, but their consistent rules make reaction changes easy to compare.",
		steps: [
			{ heading: "Step 1 · Essential rules", body: "<ul class=\"chemistry-rules\"><li>An element in its standard uncombined form has oxidation state 0: Mg(s), Cl₂(g), and S₈(s) are examples.</li><li>A monatomic ion's oxidation state equals its charge: Na⁺ is +1 and O²⁻ is −2.</li><li>Group 1 metals are +1; Group 2 metals are +2; fluorine is −1 in its compounds.</li><li>Oxygen is usually −2; hydrogen is usually +1. The sum is 0 for a neutral compound and equals the overall charge for a polyatomic ion.</li></ul>" },
			{ heading: "Step 2 · Use the sum to solve", body: "<p>In sulfate, SO₄²⁻, each oxygen usually has oxidation state −2. Let the sulfur oxidation state be x. Four oxygen atoms contribute 4 × (−2) = −8.</p><ol class=\"worked-steps\"><li>Set the sum equal to the ion's charge: x + 4(−2) = −2.</li><li>Simplify: x − 8 = −2.</li><li>Solve: x = +6. Check: +6 − 8 = −2, the charge of sulfate.</li></ol><div class=\"equation-card\">SO₄²⁻: &nbsp; x + 4(−2) = −2 &nbsp; therefore &nbsp; S = +6</div><p>For H₂O: 2(+1) + x = 0, so oxygen is −2.</p>" },
			{ heading: "Step 3 · Remember the exceptions", body: "<p>Some familiar values have exceptions: oxygen is −1 in peroxides such as H₂O₂, and hydrogen is −1 in metal hydrides such as NaH. Fluorine remains −1 in its compounds.</p><aside class=\"mistake-box\"><strong>COMMON MISCONCEPTION</strong><p>The oxidation-state sum is not always zero. For NO₃⁻, the sum must equal −1; for SO₄²⁻ it must equal −2. Do not forget to multiply each element's value by the number of atoms in the formula.</p></aside><div class=\"equation-card\">Neutral species: oxidation-state sum = 0<br>Polyatomic ion: oxidation-state sum = ion charge</div>" }
		]
	},
	{
		id: "agents", slug: "lesson-agents.html", title: "Oxidising and Reducing Agents", tag: "NAME THE AGENT",
		description: "Identify the electron donor and acceptor—and explain how each agent changes.",
		objectives: ["Identify oxidising and reducing agents in a redox equation.", "Explain that each agent is itself changed by the reaction it causes."],
		intro: "Agents are named for the effect they have on another species. You can identify them by following electron donors and acceptors or by checking which oxidation states change.",
		steps: [
			{ heading: "Step 1 · Name agents by what they do", body: "<p>An <strong>oxidising agent</strong> accepts electrons and causes another species to be oxidised; the oxidising agent is itself reduced. A <strong>reducing agent</strong> donates electrons and causes another species to be reduced; the reducing agent is itself oxidised.</p><div class=\"equation-card\">Electron donor → reducing agent → is oxidised<br>Electron acceptor → oxidising agent → is reduced</div>" },
			{ heading: "Step 2 · Identify both in an example", body: "<p>For Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s), track the oxidation-state changes and electron flow.</p><ol class=\"worked-steps\"><li>Mg changes 0 → +2 and loses two electrons. It is oxidised, donates electrons, and is the <strong>reducing agent</strong>.</li><li>Cu²⁺ changes +2 → 0 and gains two electrons. It is reduced, accepts electrons, and is the <strong>oxidising agent</strong>.</li><li>Check that the electrons lost by Mg are the same electrons gained by Cu²⁺.</li></ol><div class=\"equation-card\">Mg = electron donor / reducing agent<br>Cu²⁺ = electron acceptor / oxidising agent</div>" },
			{ heading: "Step 3 · Keep the names straight", body: "<p>The words “oxidising” and “reducing” describe what an agent does to its reaction partner—not what happens to the agent itself.</p><aside class=\"mistake-box\"><strong>COMMON MISCONCEPTION</strong><p>The oxidising agent is reduced, and the reducing agent is oxidised. Reverse the statement if you get stuck: ask who accepts electrons and who donates them.</p></aside><p>State both parts for a complete explanation: the agent's name and whether it gains or loses electrons.</p>" }
		]
	},
	{
		id: "balancing", slug: "lesson-balancing.html", title: "Balancing Redox Equations", tag: "BALANCE THE EQUATION",
		description: "Balance atoms and charge systematically using ionic half-equations.",
		objectives: ["Balance redox changes with half-equations in acidic solution.", "Check conservation of atoms and charge in the final ionic equation."],
		intro: "A correct ionic equation conserves each type of atom and total charge. The half-equation method balances these separately, then cancels electrons to combine oxidation and reduction.",
		steps: [
			{ heading: "Step 1 · The balancing sequence", body: "<p>For each half-equation in acidic solution, use a predictable order:</p><ol class=\"worked-steps\"><li>Balance elements other than oxygen and hydrogen.</li><li>Balance oxygen atoms by adding H₂O.</li><li>Balance hydrogen atoms by adding H⁺.</li><li>Balance total charge by adding e⁻.</li><li>Multiply half-equations so electron counts match; add and cancel common species.</li></ol><div class=\"equation-card\">Other atoms → O with H₂O → H with H⁺ → charge with e⁻</div>" },
			{ heading: "Step 2 · Worked example in acid", body: "<p>Balance MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acidic solution. First balance each half-reaction separately.</p><ol class=\"worked-steps\"><li>Reduction: balance oxygen with four water molecules and hydrogen with eight H⁺. Charge then requires five electrons: <strong>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</strong>.</li><li>Oxidation: <strong>Fe²⁺ → Fe³⁺ + e⁻</strong>. Multiply this half-equation by 5.</li><li>Add the halves and cancel the five electrons: <strong>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺</strong>.</li><li>Check: total charge is +17 on each side; Mn, Fe, O, and H atoms balance.</li></ol>" },
			{ heading: "Step 3 · Check the final equation", body: "<p>For alkaline solution, first balance the half-equation as if it were acidic, then add an equal number of OH⁻ ions to both sides to neutralise each H⁺. Combine H⁺ + OH⁻ to form water and cancel any extra water molecules.</p><aside class=\"mistake-box\"><strong>COMMON MISCONCEPTION</strong><p>Change coefficients, never the subscripts inside chemical formulas. After adding half-equations, remove electrons and cancel species that appear unchanged on both sides. A balanced equation must conserve atoms and charge.</p></aside><div class=\"equation-card\">Final check: atoms balance AND total charge balances</div>" }
		]
	}
];

const questionBank = [
	[
		{ id: "m1-q1", text: "What makes a chemical change a redox reaction?", options: ["It produces a gas", "Oxidation states change as electrons are transferred", "It forms a precipitate", "It occurs in water"], correct: 1, feedback: "A redox reaction couples electron loss and gain; oxidation states change as electrons are transferred.", hint: "Look for a species giving electrons and another accepting them." },
		{ id: "m1-q2", text: "In Mg + Cu²⁺ → Mg²⁺ + Cu, which atom supplies the electrons?", options: ["Magnesium", "Copper", "Sulfur", "Oxygen"], correct: 0, feedback: "Magnesium forms Mg²⁺ by losing two electrons, which Cu²⁺ accepts.", hint: "Compare the neutral metal reactant with the positive metal ion product." },
		{ id: "m1-q3", text: "In Mg + Cu²⁺ → Mg²⁺ + Cu, what happens to copper's oxidation state?", options: ["It increases from 0 to +2", "It decreases from +2 to 0", "It stays at +2", "It becomes −2"], correct: 1, feedback: "Copper(II) ions gain two electrons and become neutral copper; +2 decreases to 0.", hint: "A neutral element in its uncombined form has oxidation state 0." },
		{ id: "m1-q4", text: "Why are oxidation and reduction both present in an electron-transfer reaction?", options: ["Electrons lost by one species must be accepted by another", "Both always happen to the same atom", "Oxygen must be present", "The solution must be neutral"], correct: 0, feedback: "Electrons are conserved: the electrons lost in oxidation are gained in reduction.", hint: "Follow where the electrons released during oxidation go." }
	],
	[
		{ id: "m2-q1", text: "Which statement defines oxidation in terms of electrons?", options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], correct: 1, feedback: "Oxidation is loss of electrons. Losing negative charge raises oxidation state.", hint: "Recall OIL RIG." },
		{ id: "m2-q2", text: "Cl + e⁻ → Cl⁻. What happens to chlorine?", options: ["It is oxidised; its oxidation state rises", "It is reduced; its oxidation state falls", "It is oxidised; its oxidation state falls", "It is unchanged"], correct: 1, feedback: "Chlorine gains an electron, so it is reduced and changes from 0 to −1.", hint: "Compare the oxidation state of the uncombined atom with the ion charge." },
		{ id: "m2-q3", text: "Which equation is a balanced oxidation half-equation for aluminium?", options: ["Al → Al³⁺ + 3e⁻", "Al + 3e⁻ → Al³⁺", "Al → Al³⁺ + e⁻", "Al³⁺ → Al + 3e⁻"], correct: 0, feedback: "Aluminium loses three electrons: the product-side charge is +3 − 3 = 0.", hint: "Lost electrons appear on the product side; check the charge balances." },
		{ id: "m2-q4", text: "Which change shows reduction?", options: ["Fe²⁺ → Fe³⁺", "Mg → Mg²⁺", "Cu²⁺ → Cu", "2Cl⁻ → Cl₂"], correct: 2, feedback: "Cu²⁺ gains two electrons; its oxidation state decreases from +2 to 0.", hint: "Reduction is gain of electrons and a decrease in oxidation state." }
	],
	[
		{ id: "m3-q1", text: "What is the oxidation state of sulfur in SO₄²⁻?", options: ["+6", "+4", "−2", "+2"], correct: 0, feedback: "Let sulfur be x: x + 4(−2) = −2, so x = +6.", hint: "Four oxygen atoms contribute −8 altogether; the ion charge is −2." },
		{ id: "m3-q2", text: "What is the usual oxidation state of oxygen in H₂O₂?", options: ["−2", "−1", "0", "+1"], correct: 1, feedback: "In peroxides, oxygen is −1. Two H atoms at +1 and two O atoms at −1 sum to zero.", hint: "Hydrogen peroxide is an important exception to oxygen's usual value." },
		{ id: "m3-q3", text: "What is the oxidation state of nitrogen in NO₃⁻?", options: ["+5", "+3", "−3", "+1"], correct: 0, feedback: "x + 3(−2) = −1, so nitrogen has oxidation state +5.", hint: "Three oxygen atoms contribute −6; the total must equal the ion charge." },
		{ id: "m3-q4", text: "What is the oxidation state of an uncombined sulfur atom in S₈?", options: ["0", "−2", "+8", "+6"], correct: 0, feedback: "Any element in its standard uncombined form has oxidation state 0, including S₈.", hint: "Elemental forms have a special oxidation-state rule." }
	],
	[
		{ id: "m4-q1", text: "In Mg + Cu²⁺ → Mg²⁺ + Cu, which species is the oxidising agent?", options: ["Mg", "Cu²⁺", "Mg²⁺", "Cu"], correct: 1, feedback: "Cu²⁺ accepts electrons and causes magnesium to oxidise; Cu²⁺ is itself reduced.", hint: "The oxidising agent accepts electrons." },
		{ id: "m4-q2", text: "Which statement describes a reducing agent?", options: ["It accepts electrons and is reduced", "It donates electrons and is oxidised", "It must contain oxygen", "It gains electrons and is oxidised"], correct: 1, feedback: "A reducing agent donates electrons to another species and is itself oxidised.", hint: "It reduces the reaction partner by giving electrons." },
		{ id: "m4-q3", text: "In Zn + 2H⁺ → Zn²⁺ + H₂, which reactant is the oxidising agent?", options: ["Zn", "H⁺", "Zn²⁺", "H₂"], correct: 1, feedback: "H⁺ accepts electrons from zinc and is reduced to H₂; therefore it is the oxidising agent.", hint: "Ask which reactant gains electrons." },
		{ id: "m4-q4", text: "An oxidising agent is itself:", options: ["Oxidised by accepting electrons", "Reduced by accepting electrons", "Oxidised by losing electrons", "Unchanged in a redox reaction"], correct: 1, feedback: "An oxidising agent accepts electrons, and gaining electrons is reduction.", hint: "The agent's name describes its effect on the other reactant, not what happens to itself." }
	],
	[
		{ id: "m5-q1", text: "In acidic solution, what do you add to balance oxygen atoms in a half-equation?", options: ["H⁺", "H₂O", "e⁻", "OH⁻"], correct: 1, feedback: "Add water molecules to the side short of oxygen; then balance hydrogen with H⁺.", hint: "Use a neutral molecule that contains oxygen and hydrogen." },
		{ id: "m5-q2", text: "After balancing atoms in an acidic half-equation, what balances charge?", options: ["H₂O", "Electrons", "Change a subscript", "Oxygen gas"], correct: 1, feedback: "Add electrons to the more positive side until total charge matches.", hint: "These particles carry a negative charge and are exchanged during redox." },
		{ id: "m5-q3", text: "Why multiply half-equations before adding them?", options: ["To make the electron counts equal so they cancel", "To change the element identities", "To remove water from the equation", "To make all coefficients equal to 1"], correct: 0, feedback: "Equalising the electrons lost and gained lets the electrons cancel from the overall equation.", hint: "The final overall equation should not contain transferred electrons." },
		{ id: "m5-q4", text: "Which pair must be balanced in a final ionic redox equation?", options: ["Atoms only", "Charge only", "Both atoms and total charge", "Neither if electrons are shown"], correct: 2, feedback: "A correctly balanced ionic equation conserves each type of atom and total charge.", hint: "Check conservation of matter and electric charge separately." }
	]
];

const clothing = [
	{ id: "mint", name: "Mint lab coat", color: "#68b99d", cost: 20, caption: "MINT LAB COAT" },
	{ id: "coral", name: "Coral field jacket", color: "#ef806f", cost: 35, caption: "CORAL FIELD JACKET" },
	{ id: "gold", name: "Solar-spark hoodie", color: "#e6bd4b", cost: 50, caption: "SOLAR-SPARK HOODIE" }
];
const storageKey = "chemQuestProgress";
const freshState = () => ({
	coins: 10, completedLessons: [], completedQuestions: [], rewardedQuestions: [],
	scoreHistory: [], bestScore: 0, owned: [], outfit: "original", soundOn: false,
	lessonSteps: {}, runs: {}
});
let storageAvailable = true;
let state = loadState();
let activeRun = null;
let moduleIndex = null;
let audioContext = null;

function showStorageNotice(message) {
	const notice = document.querySelector("#storage-notice");
	if (notice) {
		notice.textContent = message;
		notice.hidden = false;
	}
}

function loadState() {
	try {
		const saved = JSON.parse(localStorage.getItem(storageKey));
		if (!saved || typeof saved !== "object" || Array.isArray(saved)) return freshState();
		const result = { ...freshState(), ...saved };
		result.coins = Number.isFinite(saved.coins) ? Math.max(0, Math.floor(saved.coins)) : 10;
		result.completedLessons = Array.isArray(saved.completedLessons) ? [...new Set(saved.completedLessons.filter(index => Number.isInteger(index) && index >= 0 && index < lessons.length))] : [];
		result.completedQuestions = Array.isArray(saved.completedQuestions) ? [...new Set(saved.completedQuestions.filter(id => typeof id === "string" && questionExists(id)))] : [];
		result.rewardedQuestions = Array.isArray(saved.rewardedQuestions) ? [...new Set(saved.rewardedQuestions.filter(id => typeof id === "string" && questionExists(id)))] : [];
		result.owned = Array.isArray(saved.owned) ? [...new Set(saved.owned.filter(id => clothing.some(item => item.id === id)))] : [];
		result.outfit = clothing.some(item => item.id === saved.outfit) ? saved.outfit : "original";
		result.soundOn = saved.soundOn === true;
		result.lessonSteps = saved.lessonSteps && typeof saved.lessonSteps === "object" ? saved.lessonSteps : {};
		result.runs = saved.runs && typeof saved.runs === "object" ? saved.runs : {};
		result.scoreHistory = Array.isArray(saved.scoreHistory) ? saved.scoreHistory.filter(run => run && Number.isFinite(run.score) && Number.isFinite(run.total)).slice(-30) : [];
		result.bestScore = Number.isFinite(saved.bestScore) ? Math.max(0, saved.bestScore) : 0;
		if (!saved.schemaVersion) {
			result.coins = Math.max(10, result.coins);
			const questionIdsByIndex = questionBank.flat().map(question => question.id);
			if (Array.isArray(saved.completedQuestions)) {
				saved.completedQuestions.forEach(index => {
					if (Number.isInteger(index) && questionIdsByIndex[index]) result.completedQuestions.push(questionIdsByIndex[index]);
				});
				result.completedQuestions = [...new Set(result.completedQuestions)];
			}
			if (Array.isArray(saved.answered) && saved.answered.length) {
				const oldScore = saved.answered.filter(Boolean).length;
				result.bestScore = Math.max(result.bestScore, oldScore);
				if (!result.scoreHistory.length) result.scoreHistory.push({ score: oldScore, total: 8, label: "Previous quiz" });
			}
			if (Array.isArray(saved.answered) && Array.isArray(saved.rewardedQuestions)) {
				const legacyRewardIds = ["m3-q4", "m2-q1", "m3-q1", "m1-q2", "m3-q2", "m2-q4", "m5-q1", "m2-q3"];
				saved.rewardedQuestions.forEach(index => {
					if (Number.isInteger(index) && legacyRewardIds[index]) result.rewardedQuestions.push(legacyRewardIds[index]);
				});
				result.rewardedQuestions = [...new Set(result.rewardedQuestions)];
			} else if (Array.isArray(saved.rewardedQuestions)) {
				saved.rewardedQuestions.forEach(index => {
					if (Number.isInteger(index) && questionIdsByIndex[index]) result.rewardedQuestions.push(questionIdsByIndex[index]);
				});
				result.rewardedQuestions = [...new Set(result.rewardedQuestions)];
			}
		}
		result.schemaVersion = 2;
		return result;
	} catch (error) {
		storageAvailable = false;
		showStorageNotice("Saved progress could not be read. You can continue this visit, but check browser storage permissions to save your work.");
		console.error("ChemQuest could not read saved progress.", error);
		return freshState();
	}
}

function questionExists(id) {
	return questionBank.some(pool => pool.some(question => question.id === id));
}

function saveState() {
	if (!storageAvailable) return false;
	try {
		state.schemaVersion = 2;
		localStorage.setItem(storageKey, JSON.stringify(state));
		return true;
	} catch (error) {
		storageAvailable = false;
		showStorageNotice("Progress could not be saved. Check browser storage permissions or available space; your current page will keep working.");
		console.error("ChemQuest could not save progress.", error);
		return false;
	}
}

function shuffle(items) {
	const result = [...items];
	for (let index = result.length - 1; index > 0; index -= 1) {
		const swapIndex = Math.floor(Math.random() * (index + 1));
		[result[index], result[swapIndex]] = [result[swapIndex], result[index]];
	}
	return result;
}

function getQuestion(id) {
	return questionBank.flat().find(question => question.id === id);
}

function createRun(context, questionIds) {
	return {
		context,
		questionIds: shuffle(questionIds),
		optionOrders: {},
		answers: {},
		currentIndex: 0,
		selectedOption: null,
		submitted: false,
		hintOpen: false,
		feedback: null,
		completed: false,
		saved: false
	};
}

function ensureQuestionOrder(run, questionId) {
	if (!Array.isArray(run.optionOrders[questionId])) {
		const question = getQuestion(questionId);
		run.optionOrders[questionId] = shuffle(question.options.map((_, index) => index));
	}
	return run.optionOrders[questionId];
}

function currentQuestion(run) {
	if (!run || run.currentIndex >= run.questionIds.length) return null;
	return getQuestion(run.questionIds[run.currentIndex]);
}

function runScore(run) {
	return Object.values(run.answers).filter(Boolean).length;
}

function saveActiveRun() {
	if (!activeRun) return;
	state.runs[activeRun.context] = activeRun;
	saveState();
}

function startRun(context, questionIds, forceNew = false) {
	const previous = state.runs[context];
	if (!forceNew && previous && Array.isArray(previous.questionIds) && previous.questionIds.length && !previous.completed) {
		activeRun = previous;
	} else {
		activeRun = createRun(context, questionIds);
		state.runs[context] = activeRun;
		saveState();
	}
	activeRun.questionIds.forEach(id => ensureQuestionOrder(activeRun, id));
	saveActiveRun();
	renderQuestion();
}

function updateHeader() {
	const coinDisplay = document.querySelector("#header-coins");
	if (coinDisplay) coinDisplay.textContent = state.coins;
	const toggle = document.querySelector("#sound-toggle");
	if (toggle) {
		toggle.setAttribute("aria-pressed", String(state.soundOn));
		toggle.setAttribute("aria-label", `Success sound ${state.soundOn ? "on" : "off"}`);
		toggle.innerHTML = `♫ <span>Sound ${state.soundOn ? "on" : "off"}</span>`;
	}
}

function renderTopics() {
	const host = document.querySelector("#topic-grid");
	if (!host) return;
	host.innerHTML = lessons.map((lesson, index) => {
		const complete = state.completedLessons.includes(index);
		return `<article class="topic-card"><div class="topic-card-top"><span class="topic-number">MODULE 0${index + 1}</span><span class="completion-badge${complete ? " complete" : ""}">${complete ? "COMPLETE ✓" : "READY TO EXPLORE"}</span></div><div class="topic-icon" aria-hidden="true">${["⚗", "⇄", "Σ", "e⁻", "⚖"][index]}</div><h2>${lesson.title}</h2><p>${lesson.description}</p><a class="button button-lime" href="${lesson.slug}">${complete ? "Review Lesson" : "Start Lesson"} <span aria-hidden="true">→</span></a></article>`;
	}).join("");
}

function renderLessonStep() {
	const host = document.querySelector("#lesson-step-content");
	if (!host || moduleIndex === null) return;
	const lesson = lessons[moduleIndex];
	const savedStep = Number(state.lessonSteps[moduleIndex]);
	const stepIndex = Number.isInteger(savedStep) ? Math.max(0, Math.min(lesson.steps.length - 1, savedStep)) : 0;
	state.lessonSteps[moduleIndex] = stepIndex;
	const step = lesson.steps[stepIndex];
	host.innerHTML = `<p class="step-kicker">${lesson.tag} / STEP 0${stepIndex + 1}</p><h2>${step.heading}</h2><div class="lesson-rich-content">${step.body}</div>`;
	document.querySelector("#lesson-title").textContent = lesson.title;
	document.querySelector("#lesson-intro").textContent = lesson.intro;
	document.querySelector("#lesson-kicker").textContent = `MODULE 0${moduleIndex + 1} / MYP 5 REDOX`;
	document.querySelector("#lesson-objectives").innerHTML = lesson.objectives.map(objective => `<li>${objective}</li>`).join("");
	document.querySelector("#step-counter").textContent = `Step ${stepIndex + 1} of ${lesson.steps.length}`;
	document.querySelector("#lesson-back").disabled = stepIndex === 0;
	document.querySelector("#lesson-next").hidden = stepIndex === lesson.steps.length - 1;
	document.querySelector("#launch-module-quiz").hidden = stepIndex !== lesson.steps.length - 1;
	document.querySelectorAll(".step-dot").forEach((dot, index) => {
		dot.classList.toggle("active", index === stepIndex);
		dot.classList.toggle("visited", index < stepIndex);
	});
	saveState();
}

function launchLessonQuiz() {
	const learning = document.querySelector("#lesson-learning");
	const quiz = document.querySelector("#module-quiz");
	if (!learning || !quiz || moduleIndex === null) return;
	learning.hidden = true;
	quiz.hidden = false;
	document.querySelector("#module-quiz-title").textContent = lessons[moduleIndex].title;
	const context = `module-${moduleIndex}`;
	startRun(context, questionBank[moduleIndex].map(question => question.id));
	quiz.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
	const card = document.querySelector("#quiz-card");
	if (!card || !activeRun) return;
	const total = activeRun.questionIds.length;
	if (activeRun.completed || activeRun.currentIndex >= total) {
		renderCompletion(card);
		return;
	}
	const question = currentQuestion(activeRun);
	if (!question) return;
	const orders = ensureQuestionOrder(activeRun, question.id);
	const correctCount = runScore(activeRun);
	const answeredCount = Object.keys(activeRun.answers).length;
	const moduleNumber = Number(question.id.match(/^m(\d+)-/)[1]);
	card.innerHTML = `<div class="quiz-card-top"><span class="question-count">QUESTION ${String(activeRun.currentIndex + 1).padStart(2, "0")} <span>/ ${total} · MODULE 0${moduleNumber}</span></span><div class="question-progress" role="progressbar" aria-label="Quiz question progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${activeRun.currentIndex + 1}"><span style="width:${((activeRun.currentIndex + 1) / total) * 100}%"></span></div></div><h2 class="quiz-question">${question.text}</h2><div class="answer-list" role="group" aria-label="Answer options">${orders.map((originalIndex, shownIndex) => `<button class="answer-option${activeRun.selectedOption === shownIndex ? " selected" : ""}${activeRun.submitted && originalIndex === question.correct ? " correct-answer" : ""}${activeRun.submitted && activeRun.feedback?.correct === false && activeRun.selectedOption === shownIndex ? " wrong-answer" : ""}" type="button" data-answer="${shownIndex}" aria-pressed="${String(activeRun.selectedOption === shownIndex)}" ${activeRun.submitted ? "disabled" : ""}><span class="answer-letter">${String.fromCharCode(65 + shownIndex)}</span>${question.options[originalIndex]}</button>`).join("")}</div><div class="quiz-controls"><button class="quiz-submit" type="button" data-quiz-action="check" ${activeRun.selectedOption === null || activeRun.submitted ? "disabled" : ""}>Check Answer</button><button class="quiz-hint-toggle" type="button" data-quiz-action="hint" aria-expanded="${activeRun.hintOpen}">${activeRun.hintOpen ? "Close hint" : "Need a Hint?"}</button></div><div class="quiz-hint${activeRun.hintOpen ? " visible" : ""}" id="question-hint" ${activeRun.hintOpen ? "" : "hidden"}><strong>A helpful clue</strong><p>${question.hint}</p></div><div id="answer-feedback" aria-live="polite">${activeRun.feedback ? `<div class="answer-feedback ${activeRun.feedback.correct ? "correct" : "incorrect"}"><strong>${activeRun.feedback.correct ? (activeRun.feedback.rewarded ? "That's right! +1 coin." : "That's right!") : "Not quite—have another try."}</strong><p>${question.feedback}</p></div>${activeRun.feedback.correct ? `<button class="quiz-submit next-question" type="button" data-quiz-action="next">${activeRun.currentIndex === total - 1 ? "See your results →" : "Next Question →"}</button>` : '<button class="small-button retry-question" type="button" data-quiz-action="retry">Try this question again</button>'}` : ""}</div>`;
	const score = document.querySelector("#quiz-score");
	if (score) score.innerHTML = `${correctCount} <small>/ ${total}</small>`;
	saveActiveRun();
}

function renderCompletion(card) {
	if (!activeRun.saved) {
		const score = runScore(activeRun);
		const total = activeRun.questionIds.length;
		const scope = activeRun.context === "global" ? "Mixed redox quiz" : lessons[moduleIndex].title;
		state.scoreHistory.push({ scope, score, total, date: new Date().toISOString() });
		state.scoreHistory = state.scoreHistory.slice(-30);
		state.bestScore = Math.max(state.bestScore, score);
		if (activeRun.context.startsWith("module-") && score === total) {
			const index = Number(activeRun.context.slice("module-".length));
			if (!state.completedLessons.includes(index)) state.completedLessons.push(index);
		}
		activeRun.completed = true;
		activeRun.saved = true;
		saveActiveRun();
		updateProgress();
	}
	const score = runScore(activeRun);
	const total = activeRun.questionIds.length;
	const isModule = activeRun.context.startsWith("module-");
	card.innerHTML = `<div class="quiz-complete"><span class="quiz-complete-mark" aria-hidden="true">✳</span><p class="eyebrow eyebrow-dark">QUEST COMPLETE</p><h2>${score === total ? "Redox mastery!" : "Great work, explorer!"}</h2><p>Your score: <strong>${score} / ${total}</strong>. You earned coins for newly mastered questions, and your result has been saved.</p>${isModule ? `<p>${score === total ? "This module is now marked complete." : "Review the learning steps and try again whenever you're ready."}</p>` : ""}<div class="quiz-complete-actions"><button class="quiz-submit" type="button" data-quiz-action="restart">Try Again</button>${isModule ? '<a class="small-button" href="Learn.html">Back to Topics</a>' : '<a class="small-button" href="Progress.html">View Progress</a>'}</div></div>`;
}

function checkAnswer() {
	if (!activeRun || activeRun.submitted || activeRun.selectedOption === null) return;
	const question = currentQuestion(activeRun);
	const order = ensureQuestionOrder(activeRun, question.id);
	const correct = order[activeRun.selectedOption] === question.correct;
	let rewarded = false;
	if (correct) {
		playSuccessSound();
		activeRun.answers[question.id] = true;
		if (!state.completedQuestions.includes(question.id)) state.completedQuestions.push(question.id);
		if (!state.rewardedQuestions.includes(question.id)) {
			state.rewardedQuestions.push(question.id);
			state.coins += 1;
			rewarded = true;
		}
	} else {
		activeRun.answers[question.id] = false;
	}
	activeRun.feedback = { correct, rewarded };
	activeRun.submitted = true;
	saveActiveRun();
	saveState();
	updateHeader();
	updateProgress();
	renderQuestion();
	if (correct) {
		const card = document.querySelector("#quiz-card");
		if (card) {
			card.classList.remove("celebrate");
			void card.offsetWidth;
			card.classList.add("celebrate");
		}
	}
}

function retryQuestion() {
	if (!activeRun || activeRun.feedback?.correct) return;
	activeRun.selectedOption = null;
	activeRun.submitted = false;
	activeRun.feedback = null;
	saveActiveRun();
	renderQuestion();
}

function nextQuestion() {
	if (!activeRun || !activeRun.feedback?.correct) return;
	activeRun.currentIndex += 1;
	activeRun.selectedOption = null;
	activeRun.submitted = false;
	activeRun.feedback = null;
	activeRun.hintOpen = false;
	if (activeRun.currentIndex >= activeRun.questionIds.length) activeRun.completed = true;
	saveActiveRun();
	renderQuestion();
}

function startGlobalQuiz(forceNew = false) {
	const mixedSelection = questionBank.flatMap(pool => shuffle(pool).slice(0, 3));
	startRun("global", mixedSelection.map(question => question.id), forceNew);
}

function updateProgress() {
	updateHeader();
	const coins = document.querySelector("#progress-coins");
	if (coins) coins.textContent = state.coins;
	const total = lessons.length + questionBank.flat().length;
	const earned = state.completedLessons.length + state.completedQuestions.length;
	const percent = Math.round(earned / total * 100);
	const count = document.querySelector("#progress-count");
	if (count) count.textContent = `${earned} / ${total} milestones`;
	const label = document.querySelector("#progress-percent");
	if (label) label.textContent = `${percent}%`;
	const fill = document.querySelector("#progress-fill");
	if (fill) fill.style.width = `${percent}%`;
	const track = document.querySelector(".progress-track");
	if (track) {
		track.setAttribute("aria-valuemax", total);
		track.setAttribute("aria-valuenow", earned);
	}
	const message = document.querySelector("#progress-message");
	if (message) message.textContent = earned === 0 ? "Start a lesson or quiz to begin your redox adventure." : earned === total ? "Every lesson complete and every question mastered. Brilliant work!" : `${state.completedLessons.length} of 5 lessons and ${state.completedQuestions.length} of 20 questions mastered.`;
	const best = document.querySelector("#best-score");
	const bestRun = state.scoreHistory.reduce((bestResult, run) => !bestResult || run.score / run.total > bestResult.score / bestResult.total ? run : bestResult, null);
	if (best) best.textContent = bestRun ? `Best quiz result: ${bestRun.score} / ${bestRun.total} (${Math.round(bestRun.score / bestRun.total * 100)}%)` : "Complete a quiz to record a score.";
	const history = document.querySelector("#quiz-history-list");
	if (history) history.innerHTML = state.scoreHistory.length ? [...state.scoreHistory].reverse().map(run => `<div class="score-history-row"><span>${run.scope || "Redox quiz"}${run.date ? ` · ${new Date(run.date).toLocaleDateString()}` : ""}</span><strong>${run.score} / ${run.total}</strong></div>`).join("") : '<p class="empty-history">Complete a quiz to save your first score.</p>';
	const lessonList = document.querySelector("#lesson-progress-list");
	if (lessonList) lessonList.innerHTML = lessons.map((lesson, index) => {
		const completed = state.completedLessons.includes(index);
		return `<div class="progress-lesson${completed ? " completed" : ""}"><span>${lesson.title}</span><span>${completed ? "COMPLETE ✓" : "IN PROGRESS"}</span></div>`;
	}).join("");
	const achievements = document.querySelector("#achievement-list");
	if (achievements) {
		const allLessons = state.completedLessons.length === lessons.length;
		const allQuestions = state.completedQuestions.length === questionBank.flat().length;
		const firstCoin = state.coins > 10 || state.rewardedQuestions.length > 0;
		achievements.innerHTML = `<div class="achievement${firstCoin ? " unlocked" : ""}"><span>✦</span><div><strong>First Discovery</strong><small>Correctly answer a new quiz question</small></div><b>${firstCoin ? "UNLOCKED" : "LOCKED"}</b></div><div class="achievement${allLessons ? " unlocked" : ""}"><span>⚗</span><div><strong>Lab Explorer</strong><small>Complete all five lesson quizzes</small></div><b>${allLessons ? "UNLOCKED" : "LOCKED"}</b></div><div class="achievement${allQuestions ? " unlocked" : ""}"><span>Σ</span><div><strong>Redox Master</strong><small>Master every question in the bank</small></div><b>${allQuestions ? "UNLOCKED" : "LOCKED"}</b></div>`;
	}
	const homeLabel = document.querySelector("#home-progress-label");
	if (homeLabel) homeLabel.textContent = `${percent}% complete`;
	const homeFill = document.querySelector("#home-progress-fill");
	if (homeFill) homeFill.style.width = `${percent}%`;
	const homeTrack = document.querySelector(".home-tracker .progress-track");
	if (homeTrack) homeTrack.setAttribute("aria-valuenow", percent);
	renderTopics();
	renderShop();
}

function renderShop() {
	const host = document.querySelector("#wardrobe-items");
	if (!host) return;
	host.innerHTML = clothing.map(item => {
		const owned = state.owned.includes(item.id);
		const wearing = state.outfit === item.id;
		const disabled = !owned && state.coins < item.cost;
		const label = owned ? (wearing ? "Wearing" : "Wear outfit") : `Unlock · ${item.cost} ✦`;
		return `<article class="wardrobe-item"><span class="wardrobe-name"><span class="wardrobe-swatch" style="background:${item.color}"></span>${item.name}</span><button class="wardrobe-button${wearing ? " owned" : ""}" type="button" data-clothing="${item.id}" ${disabled ? "disabled" : ""}>${label}</button></article>`;
	}).join("");
	const selected = clothing.find(item => item.id === state.outfit);
	const shirt = document.querySelector("#avatar-shirt");
	if (shirt) shirt.style.background = selected ? selected.color : "#7a48a1";
	const caption = document.querySelector("#avatar-caption");
	if (caption) caption.textContent = selected ? selected.caption : "LAB ORIGINAL";
}

function setShopFeedback(message, isError = false) {
	const feedback = document.querySelector("#shop-feedback");
	if (feedback) {
		feedback.textContent = message;
		feedback.classList.toggle("feedback-incorrect", isError);
		feedback.classList.toggle("feedback-correct", !isError);
	}
}

function playSuccessSound() {
	if (!state.soundOn) return;
	try {
		const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
		if (!AudioContextConstructor) return;
		audioContext ||= new AudioContextConstructor();
		if (audioContext.state === "suspended") audioContext.resume();
		const now = audioContext.currentTime;
		[659.25, 830.61, 987.77].forEach((frequency, index) => {
			const oscillator = audioContext.createOscillator();
			const gain = audioContext.createGain();
			const start = now + index * 0.09;
			oscillator.type = "sine";
			oscillator.frequency.value = frequency;
			gain.gain.setValueAtTime(0.0001, start);
			gain.gain.exponentialRampToValueAtTime(0.09, start + 0.025);
			gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.2);
			oscillator.connect(gain);
			gain.connect(audioContext.destination);
			oscillator.start(start);
			oscillator.stop(start + 0.21);
		});
	} catch (error) {
		console.warn("Chem Quest could not play the success sound.", error);
	}
}

function initPage() {
	updateProgress();
	const page = document.body.dataset.page;
	if (page === "lesson") {
		moduleIndex = Number(document.body.dataset.moduleIndex);
		if (!Number.isInteger(moduleIndex) || !lessons[moduleIndex]) return;
		document.querySelector("#lesson-back").addEventListener("click", () => {
			state.lessonSteps[moduleIndex] = Math.max(0, Number(state.lessonSteps[moduleIndex] || 0) - 1);
			renderLessonStep();
		});
		document.querySelector("#lesson-next").addEventListener("click", () => {
			state.lessonSteps[moduleIndex] = Math.min(2, Number(state.lessonSteps[moduleIndex] || 0) + 1);
			renderLessonStep();
		});
		document.querySelector("#launch-module-quiz").addEventListener("click", launchLessonQuiz);
		renderLessonStep();
		const savedRun = state.runs[`module-${moduleIndex}`];
		if (savedRun && !savedRun.completed && savedRun.questionIds?.length) {
			document.querySelector("#lesson-learning").hidden = true;
			document.querySelector("#module-quiz").hidden = false;
			document.querySelector("#module-quiz-title").textContent = lessons[moduleIndex].title;
			activeRun = savedRun;
			renderQuestion();
		}
	} else if (page === "global-quiz") {
		if (state.runs.global && !state.runs.global.completed && state.runs.global.questionIds?.length) {
			activeRun = state.runs.global;
			renderQuestion();
		} else {
			startGlobalQuiz();
		}
	}
}

document.addEventListener("click", event => {
	const target = event.target instanceof Element ? event.target : null;
	if (!target) return;
	const soundToggle = target.closest("#sound-toggle");
	if (soundToggle) {
		state.soundOn = !state.soundOn;
		saveState();
		updateHeader();
		return;
	}
	const answer = target.closest(".answer-option");
	if (answer && activeRun && !activeRun.submitted) {
		activeRun.selectedOption = Number(answer.dataset.answer);
		saveActiveRun();
		renderQuestion();
		return;
	}
	const quizAction = target.closest("[data-quiz-action]")?.dataset.quizAction;
	if (quizAction === "check") checkAnswer();
	if (quizAction === "retry") retryQuestion();
	if (quizAction === "next") nextQuestion();
	if (quizAction === "restart") {
		if (activeRun?.context === "global") startGlobalQuiz(true);
		else if (moduleIndex !== null) startRun(`module-${moduleIndex}`, questionBank[moduleIndex].map(question => question.id), true);
	}
	if (quizAction === "hint" && activeRun) {
		activeRun.hintOpen = !activeRun.hintOpen;
		saveActiveRun();
		renderQuestion();
	}
	const clothingButton = target.closest("[data-clothing]");
	if (clothingButton) {
		const item = clothing.find(entry => entry.id === clothingButton.dataset.clothing);
		if (!item) return;
		if (!state.owned.includes(item.id)) {
			if (state.coins < item.cost) {
				setShopFeedback("You need more quest coins for that outfit. Try a new quiz question first.", true);
				return;
			}
			state.coins -= item.cost;
			state.owned.push(item.id);
			setShopFeedback(`${item.name} unlocked! Your remaining balance is ${state.coins} coins.`);
		} else {
			setShopFeedback(`${item.name} is ready for your next lab.`);
		}
		state.outfit = item.id;
		saveState();
		updateProgress();
	}
});

window.addEventListener("storage", event => {
	if (event.key !== storageKey) return;
	state = loadState();
	if (activeRun) activeRun = state.runs[activeRun.context] || activeRun;
	updateProgress();
	if (document.querySelector("#topic-grid")) renderTopics();
	if (moduleIndex !== null && document.querySelector("#lesson-step-content")) renderLessonStep();
	renderQuestion();
});

initPage();
