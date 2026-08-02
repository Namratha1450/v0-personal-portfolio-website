<div className="space-y-6 max-w-3xl">

  {/* Project 1 */}
  <div className="anim-item glow-card rounded-lg bg-card p-5 sm:p-6 text-left">
    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
      🛒 Retail Shelf Object Detection using YOLOv5
    </h3>

    <p className="text-xs sm:text-sm text-muted-foreground mb-3">
      Developed an object detection system for smart retail shelves using YOLOv5.
    </p>

    <div className="flex flex-wrap gap-2 mb-3">
      {["Python","YOLOv5","PyTorch","OpenCV","Google Colab"].map((tech)=>(
        <span
          key={tech}
          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
        >
          {tech}
        </span>
      ))}
    </div>

    <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
      <li>• Developed an object detection model for retail shelf products.</li>
      <li>• Performed image annotation and dataset labeling.</li>
      <li>• Trained and validated the YOLOv5 model.</li>
      <li>• Achieved 92.3% detection accuracy.</li>
    </ul>
  </div>

  {/* Project 2 */}
  <div className="anim-item glow-card rounded-lg bg-card p-5 sm:p-6 text-left">
    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
      ❤️ Healthy Lifestyle System
    </h3>

    <p className="text-xs sm:text-sm text-muted-foreground mb-3">
      Machine learning based health monitoring and lifestyle analysis system.
    </p>

    <div className="flex flex-wrap gap-2 mb-3">
      {["Python","Pandas","NumPy","Matplotlib","Plotly","Seaborn"].map((tech)=>(
        <span
          key={tech}
          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
        >
          {tech}
        </span>
      ))}
    </div>

    <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
      <li>• Built an ML-based health monitoring system.</li>
      <li>• Predicted BMI and health metrics.</li>
      <li>• Created interactive visualizations using Plotly.</li>
      <li>• Generated health insights using data analysis.</li>
    </ul>
  </div>

  {/* Project 3 */}
  <div className="anim-item glow-card rounded-lg bg-card p-5 sm:p-6 text-left">
    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
      🌍 Interactive Global Tourism Analytics Dashboard
    </h3>

    <p className="text-xs sm:text-sm text-muted-foreground mb-3">
      Interactive Power BI dashboard for analyzing tourism trends and travel insights.
    </p>

    <div className="flex flex-wrap gap-2 mb-3">
      {["Power BI","Power Query","Excel","GitHub"].map((tech)=>(
        <span
          key={tech}
          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
        >
          {tech}
        </span>
      ))}
    </div>

    <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
      <li>• Collected and cleaned tourism datasets.</li>
      <li>• Built interactive Power BI dashboards.</li>
      <li>• Analyzed tourism trends and travel patterns.</li>
      <li>• Generated business insights using data visualization.</li>
    </ul>
  </div>

</div>
