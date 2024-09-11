var documenterSearchIndex = {"docs":
[{"location":"add_problem.html#How-to-add-a-new-problem-to-OptimalControlProblems.jl","page":"How to add a new problem","title":"How to add a new problem to OptimalControlProblems.jl","text":"","category":"section"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"To add a new problem to OptimalControlProblems.jl, you need to follow these steps:","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"1. Create a new file in the ext/MetaData directory with the name of your problem and containing the needed information about the problem in a dictionary. ","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"For example, if your problem is called new_problem, create a file called new_problem.jl.","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"The dictionary should have the following template:","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"new_problem_meta = Dict(:name => \"new_problem\", # Name of the problem\n                        :nh => nothing, # Number of discretization points\n                        :nvar => nothing, # Number of variables\n                        :ncon => nothing, # Number of constraints\n                        :minimize => true # Whether the problem is a minimization problem\n                        )","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"The use of nothing in the dictionary is allowed and is used to indicate that the information is not available yet. Once you have the information, you can update the dictionary with the correct values.","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"2. Define the OptimalControl model for the problem in a new file in the ext/OptimalControlModels directory.","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"\"\"\"\n    Description of the new problem\n\"\"\"\nfunction OptimalControlProblems.new_problem(::OptimalControlBackend; nh::Int=default_value)\n    @def ocp begin\n        # Define the problem here\n        # ...\n    end\n\n    # Initial guess for the problem\n    init = () \n\n    # Obtain the NLPModel\n    nlp = direct_transcription(ocp; init=init, grid_size=nh)[2]\n\n    return nlp\nend","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"3. Define the JuMP model for the problem in a new file in the ext/JuMPModels directory.","category":"page"},{"location":"add_problem.html","page":"How to add a new problem","title":"How to add a new problem","text":"\"\"\"\n    Description of the new problem\n\"\"\"\nfunction OptimalControlProblems.new_problem(::JuMPBackend; nh::Int=default_value)\n    model = JuMP.Model()\n\n    # Define the problem here\n    # ...\n\n    return model\nend","category":"page"},{"location":"use_models.html#How-to-use-models-from-OptimalControlProblems.jl","page":"How to use the models","title":"How to use models from OptimalControlProblems.jl","text":"","category":"section"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"For each model in OptimalControlProblems, we need to use a specific bcakend to distinguish JuMP models from OtimalControl models.","category":"page"},{"location":"use_models.html#Using-JuMP-models","page":"How to use the models","title":"Using JuMP models","text":"","category":"section"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"To use JuMP models from OptimalControlProblems.jl, you need to have JuMP installed. ","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"By running the following code, you can get the total number of JuMP models available in OptimalControlProblems.jl:","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"using JuMP\nusing OptimalControlProblems","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"We can call for example the cart_pendulum problem as follows:","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"model = cart_pendulum(JuMPBackend())","category":"page"},{"location":"use_models.html#Using-OptimalControl-models","page":"How to use the models","title":"Using OptimalControl models","text":"","category":"section"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"To use OptimalControl models from OptimalControlProblems.jl, you need to have CTDirect installed.","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"note: using OptimalControl\nYou can also use OptimalControl instead of CTDirect, as the former automatically imports the latter. This simplifies the code by requiring only one import statement.# Instead of this\nusing CTDirect\n# You can do this\nusing OptimalControl  # This implicitly includes CTDirect","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"By running the following code, you can get the total number of OptimalControl models available in OptimalControlProblems.jl:","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"using CTDirect\nusing OptimalControlProblems","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"We can call for example the cart_pendulum problem as follows:","category":"page"},{"location":"use_models.html","page":"How to use the models","title":"How to use the models","text":"model = cart_pendulum(OptimalControlBackend())","category":"page"},{"location":"list_of_problems.html#List-of-Problems","page":"List of the problems","title":"List of Problems","text":"","category":"section"},{"location":"list_of_problems.html#Where-to-find-the-problems","page":"List of the problems","title":"Where to find the problems","text":"","category":"section"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"The problems are stored in OptimalControlProblems.jl/ext directory. JuMP models are stored in JuMPModels directory and OptimalControl models are stored in OptimalControlModels.","category":"page"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"For each problem, we provide the following data in MetaData directory:","category":"page"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"name::String: problem name\nnh::Int: default number of discretization points\nnvar::Int: number of variables\nncon::Int: number of general constraints\nminimize::Bool: true if optimize == minimize","category":"page"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"To get the list of metadata, you can use the following code:","category":"page"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"using OptimalControlProblems\nOptimalControlProblems.metadata\nnothing # hide","category":"page"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"To access the metadata of a specific problem, you can execute the following command:","category":"page"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"OptimalControlProblems.metadata[:chain]","category":"page"},{"location":"list_of_problems.html#List-of-Problems-2","page":"List of the problems","title":"List of Problems","text":"","category":"section"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"The table below summarizes the status of the each problem:","category":"page"},{"location":"list_of_problems.html","page":"List of the problems","title":"List of the problems","text":"Problem With JuMP With OptimalControl\nbeam ✅ ✅\nbioreactor ✅ ✅\ncart_pendulum ✅ ✅\nchain ✅ ✅\ndielectrophoretic_particle ✅ ✅\ndouble_oscillator ✅ ✅\nducted_fan ✅ ✅\nelectrical_vehicle ✅ ✅\nglider ✅ ✅\ninsurance ✅ ✅\njackson ✅ ✅\nmoonlander ✅ ❌\nquadrotor ✅ ❌\nrobbins ✅ ✅\nrobot ✅ ✅\nrocket ✅ ✅\nspace_shuttle ✅ ❌\nsteering ✅ ✅\ntruck_trailer ❌ ❌\nvanderpol ✅ ✅","category":"page"},{"location":"solve_problem.html#Resolution-of-OptimalControlProblems.jl-problems","page":"How to solve a problem","title":"Resolution of OptimalControlProblems.jl problems","text":"","category":"section"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"We consider the The Hanging Chain Problem from COPS package as an example. The problem is to find the shape of a chain hanging between two points a and b. The chain is assumed to be a uniform cable with a given length L.  The aim is to find the shape of the chain that minimizes the potential energy. ","category":"page"},{"location":"solve_problem.html#Solving-JuMP-version","page":"How to solve a problem","title":"Solving JuMP version","text":"","category":"section"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"We need first to import the needed packages and the problem.","category":"page"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"using OptimalControlProblems\nusing JuMP\n\nmodel = chain(JuMPBackend())","category":"page"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"Then we can solve the problem using the optimize! function of Ipopt solver.\t","category":"page"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"using Ipopt\n# Set the optimizer\nset_optimizer(model, Ipopt.Optimizer)\n# Set the optimizer attributes\nset_optimizer_attribute(model, \"tol\", 1e-8)\nset_optimizer_attribute(model, \"constr_viol_tol\", 1e-6)\nset_optimizer_attribute(model, \"mu_strategy\", \"adaptive\")\nset_optimizer_attribute(model, \"linear_solver\", \"mumps\")\nset_optimizer_attribute(model, \"sb\", \"yes\")\n# Solve the model\noptimize!(model)","category":"page"},{"location":"solve_problem.html#Solving-OptimalControl-version","page":"How to solve a problem","title":"Solving OptimalControl version","text":"","category":"section"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"We need first to import the needed packages and the problem.","category":"page"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"using OptimalControlProblems\nusing CTDirect\n\nmodel = chain(OptimalControlBackend())","category":"page"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"Then we can solve the problem using the ipopt function of NLPModelsIpopt.\t","category":"page"},{"location":"solve_problem.html","page":"How to solve a problem","title":"How to solve a problem","text":"using NLPModelsIpopt\n# Solve the model\nsol = NLPModelsIpopt.ipopt(\n                model;\n                # Optimizer attributes\n                print_level=5,\n                tol=1e-8,\n                mu_strategy=\"adaptive\",\n                sb=\"yes\",\n                constr_viol_tol=1e-6,\n            )\nnothing # hide","category":"page"},{"location":"index.html#OptimalControlProblems","page":"Introduction","title":"OptimalControlProblems","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Documentation for OptimalControlProblems.","category":"page"},{"location":"index.html#Dependencies","page":"Introduction","title":"Dependencies","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"All the numerical simulations to generate this documentation are performed with the following packages.","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"using Pkg\nPkg.status()","category":"page"}]
}
