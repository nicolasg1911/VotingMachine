class CandidateComponent{

    constructor(candidate){
        this.candidate=candidate;
    }

    render(container){
        let html = `
            <div class="card text-center" style="width: 24rem;">
            <div class="card-body">
            <h5 class="card-title"><b> PRESIDENTE</b><br>${this.candidate.president}</h5>
            <p class="card-subtitle mb-2 text-muted"><b> VICEPRESIDENTE</b><br> ${this.candidate.vicepresident}</p>
            <a href="#" id="button${this.candidate.id}" class="btn btn-primary">VOTAR</a>
            </div>
        </div>
        `;

        let root = document.createElement('div');
        root.innerHTML = html.trim();
        container.appendChild(root.firstChild);

        let button = document.getElementById(`button${this.candidate.id}`);
        button.addEventListener('click', this.action.bind(this));

        
    }  

    action(event){
   
        event.preventDefault();
        let url = `http://localhost:8080/api/election/update/${this.candidate.id}`;
        fetch(url, {method:'PUT'})
        .then(response => response.json())

                window.alert('Su voto fue registrado');
                window.location.href = "results.html";
          
    }
    
}