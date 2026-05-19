---
title: Value Propositions
description: Articulate exactly what your venture offers, for whom, and why customers should choose you — using the Value Proposition Canvas, the Mom Test, and the jobs-to-be-done lens.
generated_by: claude skill chapter-content-generator
date: 2026-05-18 23:10:23
version: 0.08
---

# Value Propositions

## Summary

This chapter guides you through the tools and thinking needed to articulate exactly what your venture offers, for whom, and why customers should choose you over the alternatives. You will learn the Value Proposition Canvas, the jobs-to-be-done lens, and the difference between features and benefits — and you will conduct your first real customer conversation using the Mom Test framework. By the end of this chapter, you will have a one-sentence value proposition ready for your pitch deck.

## Concepts Covered

This chapter covers the following 14 concepts from the learning graph:

1. Value Proposition
2. Customer Segments
3. Customer Jobs
4. Customer Pains
5. Customer Gains
6. Pain Relievers
7. Gain Creators
8. Features vs. Benefits
9. Customer Interviews
10. Competitive Differentiation
11. Unique Selling Proposition
12. Early Adopters
13. Target Customer Profile
14. Persona Development

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Ikigai and Self-Discovery](../01-ikigai-and-self-discovery/index.md)
- [Chapter 2: Ideation Across the Liberal Arts](../02-ideation-across-liberal-arts/index.md)
- [Chapter 3: Recognizing Opportunity](../03-recognizing-opportunity/index.md)

---

Imagine you are at the Ole Cup competition day. A judge leans forward and asks: "So what problem do you actually solve, and why would someone choose you instead of just doing what they are doing now?"

You have thirty seconds. The camera is on. Your co-founder is watching from the side of the room.

If you can answer that question clearly, specifically, and in plain English, you are ahead of at least half the teams in the room. If you reach for the word "platform" and trail off into something about "connecting users," you are not.

That question is asking for your **value proposition** — and it turns out that getting the answer right is less about having the perfect idea and more about having done the work of actually talking to customers. This chapter shows you how to do both.

!!! mascot-welcome "Chapter 4: Your venture's one true sentence"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Rune the Raven welcoming you to Chapter 4">
    This is the chapter where you stop talking about your idea in the abstract and start saying exactly what it does, for exactly whom, and why it is better than the alternatives. That sentence — your value proposition — will appear on your pitch deck, your Ole Cup application, and every conversation you have about your venture for the next year. Let's make it a good one.

## What a Value Proposition Actually Is

A **value proposition** is a clear, testable statement of the specific value your venture creates for a specific customer. Every word in that definition does work:

- **Clear** — a person who has never heard of your idea should understand it immediately.
- **Testable** — you can go ask customers whether they find it compelling, and get a real answer.
- **Specific value** — not "we improve things" but a concrete, nameable benefit.
- **Specific customer** — not "everyone" or "small businesses" but a defined person with a defined problem.

Here is a simple template you can use right now: *"We help [specific customer] who [specific problem they have] by [specific thing you do] so that [specific benefit they get]."*

Applied to a real example: "We help Division III college athletes who lose 48 hours of coaching feedback because game film is too large to email, by providing a lightweight mobile app for instant film sharing with coaches, so that athletes get same-day feedback and improve faster." That is not a polished pitch line. It is a first draft value proposition — and it is already better than "we are a platform for athlete communication" because it says something specific and falsifiable.

Before going further, let's define the two sides of the value proposition: the customer side (what the customer experiences) and the venture side (what you offer in response).

| Customer Side | Venture Side |
|---|---|
| **Customer Jobs** — the tasks, goals, and problems the customer is trying to address | **Pain Relievers** — the specific ways your offering reduces or eliminates customer pains |
| **Customer Pains** — the friction, risk, frustration, or cost the customer experiences | **Gain Creators** — the ways your offering creates benefits the customer wants |
| **Customer Gains** — the outcomes the customer wants but is not yet getting | Your offering: the specific product or service you provide |

This two-sided structure comes from the **Value Proposition Canvas**, developed by Alexander Osterwalder (the same researcher who created the Business Model Canvas you will use in Chapter 8). The canvas maps customer experience against your offering to reveal whether there is real alignment — or whether you are building features no one asked for.

## Customer Jobs, Pains, and Gains

The jobs-to-be-done framework, developed by Clayton Christensen and Bob Moesta, offers a powerful lens for understanding what customers are actually trying to accomplish. The central insight is this: customers do not buy products — they **hire** them to do a job. When you understand the job the customer is trying to get done, you can design your value proposition around the actual task rather than around assumptions about what they want.

**Customer jobs** come in three types:

1. **Functional jobs** — the practical task the customer is trying to complete. ("Get feedback on my game film before next week's game.")

2. **Social jobs** — how the customer wants to be perceived by others in the process. ("Look like a serious, technically proficient athlete to my coaches and recruiters.")

3. **Emotional jobs** — how the customer wants to feel. ("Feel like I am improving, not just showing up and hoping for the best.")

Founders who only address functional jobs often create products that work perfectly and get ignored. The social and emotional jobs are frequently what determine whether a customer actually adopts and sticks with a solution.

**Customer pains** are the obstacles, frustrations, and risks that prevent customers from getting the job done or getting it done well. They fall into three categories: undesired outcomes (the thing goes wrong or produces the wrong result), obstacles (the thing is too expensive, too complicated, or not available), and risks (the customer is afraid of what might happen if they try and fail).

**Customer gains** are the specific outcomes and benefits the customer wants. They range from required gains (the bare minimum for the solution to work at all), expected gains (what the customer assumes a reasonable solution would include), desired gains (what the customer would love but does not expect), and unexpected gains (things the customer did not know they wanted until they experienced them).

!!! mascot-thinking "Jobs are more specific than problems"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Rune the Raven in a thoughtful pose">
    "I need a better way to share video" is a problem. "I need to share a 2GB game film file with three coaches and get their annotated feedback before Friday's practice" is a job. The more specific you get about the job, the better your value proposition will fit.

The following interactive Value Proposition Canvas lets you map your own customer's jobs, pains, and gains against your proposed pain relievers and gain creators.

#### Diagram: Value Proposition Canvas

<details markdown="1">
<summary>Interactive Value Proposition Canvas — map customer experience against your offering side-by-side</summary>
Type: MicroSim
**sim-id:** value-proposition-canvas<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning objective:** Students complete a Value Proposition Canvas for their venture by mapping customer jobs, pains, and gains against specific pain relievers and gain creators. (Bloom's Taxonomy: Applying and Analyzing)

**Canvas:** 740×520px responsive, redraws on window resize events.

**Layout:** Two side-by-side panels divided by a vertical line. Left panel is the "Customer Profile" circle (round section); right panel is the "Value Map" square section. Each panel is further subdivided into three zones.

**Left panel — Customer Profile (circle shape):**
- Top third: "Customer Jobs" zone (blue-gray, labeled with a briefcase icon)
- Bottom-left third: "Customer Pains" zone (salmon/red, labeled with a lightning bolt icon)
- Bottom-right third: "Customer Gains" zone (green, labeled with a star icon)
Each zone contains up to 5 sticky-note style text entry boxes (click to type, click again to add another).

**Right panel — Value Map (square shape):**
- Top third: "Gain Creators" zone (green, labeled with a plus-circle icon)
- Bottom-left third: "Pain Relievers" zone (salmon/red, labeled with a shield icon)
- Bottom-right third: "Products & Services" zone (yellow, labeled with a gear icon)
Each zone contains up to 5 sticky-note style text entry boxes.

**Fit indicator:** Between the two panels, a central "Fit?" badge that turns from gray to green when at least one customer pain has a corresponding pain reliever entry, and at least one customer gain has a corresponding gain creator entry.

**Interaction:**
- Clicking any zone opens a text entry field; pressing Enter or clicking outside commits the entry as a sticky note.
- Sticky notes can be deleted by clicking a small ✕ on hover.
- A "Check Fit" button evaluates whether each pain has a reliever and each gain has a creator, then highlights matched pairs with a connecting line between panels.
- An "Export as Text" button generates a plain-text summary of all entries organized by section.

**Responsive design:** On window resize, recalculate and redraw. At widths below 600px, stack the two panels vertically. Minimum canvas width: 320px.

**Accessibility:** All text entry fields are standard HTML inputs. Sticky note content is also stored in a hidden accessible list for screen reader use.
</details>

## Features vs. Benefits

One of the most reliably fatal mistakes in early-stage pitching is confusing features with benefits. Understanding the difference will improve every conversation you have about your venture.

A **feature** is what your product or service does or has. A **benefit** is what it does *for the customer* — how it changes their experience, reduces their pain, or creates the gain they want.

| Feature | Benefit |
|---|---|
| "Our app compresses video files before upload." | "You can share full-length game film in under 30 seconds on a campus WiFi connection." |
| "We use end-to-end encryption." | "Your coaching conversations stay private — no one outside your program sees your plays." |
| "We have coach annotation tools." | "Your coaches can mark up your film and send it back with specific feedback, the same day." |
| "We offer a free tier." | "You can try it for an entire season without spending anything." |

Notice that the features column describes the product from the inside — from the perspective of whoever built it. The benefits column describes the same attributes from the outside — from the perspective of whoever uses it. Your value proposition lives entirely in the benefits column. Your features are how you deliver the benefits, but customers do not pay for features. They pay for what the features enable.

The practical test: read any sentence about your venture and ask "so what does that mean for the customer?" Keep asking that question until you reach the actual human benefit. That is where your value proposition lives.

## The Mom Test

There is a problem with asking people whether your venture idea is good: they will almost always say yes. Not because they are lying, but because saying yes is socially easier than saying no, and because answering the question you asked ("do you like this idea?") is easier than answering the question you needed to ask ("would you actually use this, and would you pay for it?").

**Rob Fitzpatrick** identified this dynamic in his book *The Mom Test*, which offers a framework for customer interviews that produces real information instead of polite encouragement. The premise: if you ask your mom whether your business idea is good, she will say yes — because she loves you. So instead of asking questions whose answers depend on people's willingness to disappoint you, ask questions whose answers are factual and observable.

The three Mom Test rules are:

1. **Talk about their life, not your idea.** Ask about how they currently handle the problem. "How are you currently sharing game film with your coaches?" gets you real behavioral data. "Would you use an app for sharing game film?" does not.

2. **Ask about the past, not the future.** "Have you ever paid for a solution to this problem?" gives you real evidence. "Would you pay for a solution to this problem?" gets you a hypothetical that people routinely over-promise.

3. **Never reveal your solution while gathering problem data.** The moment you describe your solution, the conversation shifts from customer research to social validation. Get all your problem data first. You can reveal the solution later — ideally only after you have confirmed that the problem is real and severe.

A good Mom Test conversation feels less like a pitch and more like an interview you are doing for an article about the person's life. You are genuinely curious. You are not trying to persuade them. You are collecting data.

!!! mascot-warning "Compliments are not validation"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Rune the Raven with a cautionary expression">
    "That sounds really useful!" is the most dangerous sentence in customer discovery. It is not data — it is kindness. The signal you are looking for is a specific, concrete description of how they currently struggle with the problem and what they have already tried or paid to address it.

## Early Adopters and the Target Customer Profile

Not all potential customers are equal at early stage. **Early adopters** are the specific subset of your customer base who are so motivated by their pain that they will try an imperfect, early solution that does not yet do everything. They are the customers who are already building workarounds, who are actively searching for alternatives, and who will give you honest, specific feedback rather than polite encouragement.

Early adopters matter for two reasons. First, they are the only realistic initial market for a student venture — you do not have the resources to serve everyone at once, and early adopters are the ones who will actually give your first version a real try. Second, their feedback is disproportionately valuable because they understand the problem deeply enough to tell you specifically what is wrong with your solution.

To find your early adopters, ask: who is already in pain enough to be actively doing something about this problem? Who is currently paying for a partial solution? Who complains about this most loudly in the communities you can access? At St. Olaf, the campus community is both a real early-adopter pool and a research environment — a student venture addressing a campus-specific friction can run a genuine pilot with real users in a single semester.

A **target customer profile** is a specific, written description of your early adopter that goes beyond demographic data. It includes: the specific job this person is trying to get done, the specific pains they experience, the workarounds they currently use, the gains they most want, and the channels through which they discover and adopt new solutions. A good target customer profile is specific enough that you could go to campus tomorrow and identify three people who match it.

**Persona development** formalizes this profile into a named, described individual. A persona is not a fictional character — it is a composite of real people you have actually talked to, distilled into a single profile that represents the patterns you observed. Good personas include a name, a one-sentence description of their situation, their primary job-to-be-done, their top three pains, and their top three desired gains. They are updated as you learn more from additional customer conversations.

## Your One-Sentence Value Proposition

Now you have the components. Let's put them together.

Before writing your value proposition, complete these four inputs:

1. **Your customer segment:** [specific description — not "students" but "Division III varsity athletes at liberal arts colleges with coaches who travel"]

2. **Their primary job-to-be-done:** [specific functional job — "get actionable coaching feedback on game film before next practice"]

3. **Your primary pain reliever:** [what you do that addresses their biggest pain — "instant mobile film upload that compresses automatically, no email, no waiting"]

4. **The gain you create:** [the desired outcome they are currently not getting — "same-day feedback that makes each practice more targeted"]

Template: *"We help [1] to [2] by [3] so that [4]."*

This is not your final pitch line — that gets refined in Chapter 11. This is your internal working statement: precise enough to test with customers, specific enough to guide your product decisions, and honest enough to tell you when you are building the wrong thing.

**Competitive differentiation** is what makes your value proposition specifically better than the alternatives — not just different, but better for a specific customer. The simplest test: put your value proposition next to the status quo (doing nothing, using a workaround) and the nearest competitor and ask "for the customer I described, why is mine clearly the better choice?" If the answer is not immediately obvious, you need to sharpen either the customer definition or the benefit claim.

Your **unique selling proposition** (USP) is the single most important way you differ from all alternatives. For a student venture, the USP often comes directly from your Ikigai: the thing that is true about you — your background, your access, your lived experience, your network — that no one else building in this space can easily replicate. A theater student building a rehearsal management tool has a different USP than a software engineer building the same tool, not because the features are different but because the understanding of the user is deeper and more authentic.

## Try It

1. **Jobs, Pains, and Gains Interview.** Conduct a Mom Test conversation with one person who fits your early-adopter profile. Ask only about their life and behavior — no mention of your solution. Document their primary functional job, their top two pains, and their top two desired gains. Use their exact language wherever possible.

2. **Feature-to-Benefit Translation.** List three features of your proposed solution. For each one, apply the "so what does that mean for the customer?" test until you reach the actual human benefit. Rewrite your description using only the benefit column.

3. **Complete a Value Proposition Canvas.** Use the interactive tool above to map your customer's jobs, pains, and gains on the left side, and your pain relievers, gain creators, and offering on the right. Check whether every significant pain has a matching reliever and every desired gain has a matching creator.

4. **Write Your One-Sentence Value Proposition.** Use the template above to draft your first value proposition. Read it to three people who match your early-adopter profile. Ask them: "Does this describe a problem you actually have?" and "Does the solution part sound like it would genuinely help?" Record their responses — especially any moment when they push back or look confused.

!!! tip "Ole Cup Connection"
    The Value Proposition section of the Ole Cup pitch deck is the slide judges most frequently ask follow-up questions about. "Who is your customer, really?" and "Why would they choose you over doing nothing?" are the two questions that reveal whether a team has done genuine customer discovery or is operating on assumptions. The Mom Test interviews and Value Proposition Canvas you complete in this chapter are the foundation for answering both questions with confidence. Judges have built companies. They know the difference between a value proposition derived from customer conversations and one derived from wishful thinking.

!!! mascot-celebration "You just did customer development — most teams skip this entirely"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Rune the Raven celebrating with wings raised">
    The value proposition work you completed here — jobs, pains, gains, Mom Test interviews, feature-to-benefit translation — is the work that separates the Ole Cup finalists from the teams that built something nobody asked for. In Chapter 5, we take your validated value proposition and ask: what is the smallest possible thing we could build to test whether it actually works?
