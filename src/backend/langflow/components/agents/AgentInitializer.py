from typing import List

from langchain.agents import AgentExecutor, AgentType, initialize_agent, types
from langflow import CustomComponent
from langflow.field_typing import BaseChatMemory, BaseLanguageModel, Tool


class AgentInitializerComponent(CustomComponent):
    display_name: str = "Agent Initializer"
    description: str = f"Initialize an agent of type: {types.AGENT_TO_CLASS.keys()}"
    documentation: str = "https://python.langchain.com/docs/modules/agents/agent_types/"

    def build_config(self):
        agents = list(types.AGENT_TO_CLASS.keys())
        # field_type and required are optional
        return {
            "agent": {"options": agents, "value": agents[0], "display_name": "Agent Type"},
            "max_iterations": {"display_name": "Max Iterations", "value": 10},
            "memory": {"display_name": "Memory"},
            "tools": {"display_name": "Tools"},
            "llm": {"display_name": "Language Model"},
        }

    def build(
        self, agent: str, llm: BaseLanguageModel, memory: BaseChatMemory, tools: List[Tool], max_iterations: int
    ) -> AgentExecutor:
        agent = AgentType(agent)
        return initialize_agent(
            tools=tools,
            llm=llm,
            agent=agent,
            memory=memory,
            return_intermediate_steps=True,
            handle_parsing_errors=True,
            max_iterations=max_iterations,
        )
